import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Product, Products } from '../../models/model-lista-produtos.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  errorMessage: string = '';
  produtos: Products[] = [];
  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private httpClient: HttpClient) { }

  buscarProdutos(): Observable<any> {
    return this.httpClient.get<any>(environment.buscarProdutos)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  buscarPorPagina(limit, skip): Observable<any> {
    let url = `${environment.procurarProdutos}limit=${limit}&skip=${skip}`
    return this.httpClient.get<any>(url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  editarTituloProdutoAtual(titulo, id): Observable<any>{
    const url = `${environment.editarProduto}${id}`
    return this.httpClient.patch<any>(
      url, JSON.stringify({title: titulo}), this.httpHeader)
      .pipe(
        retry(1),
        catchError(this.handleError))
  }

  cadastrarNovoProduto(novoProduto: Product): Observable<any>{
    return this.httpClient.post<any>(
      environment.cadastrarNovoProduto, JSON.stringify({title: novoProduto.title}), this.httpHeader)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      this.errorMessage = 'erro client' + error.error.message;
      console.log(this.errorMessage)
    } else {
      this.errorMessage = `erro servidor ${error.status}, ` + `menssagem servidor: ${error.message}`;
      console.log(this.errorMessage);
    }
    return this.errorMessage;
  };
}
