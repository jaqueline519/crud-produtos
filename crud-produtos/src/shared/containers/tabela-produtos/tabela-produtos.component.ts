import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../service/produtos-service/produtos.service';
import { Product } from '../../models/model-lista-produtos.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from 'src/shared/components/dialog/dialog.component';
import { EventosService } from 'src/shared/service/eventos-service/eventos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.scss'],
})
export class TabelaProdutosComponent implements OnInit {
  produtosDaTabela: Product[];
  limiteDeProdutosPagina;
  skip;
  total;
  displayedColumns: string[] = ['id', 'title', 'brand', 'price'];
  tituloAtual;

  constructor(
    private produtosService: ProdutosService,
    private dialog: MatDialog,
    private emissorDeEventos: EventosService,
  ) { }

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos() {
    this.produtosService.buscarProdutos().subscribe((retorno) => {
      this.produtosDaTabela = retorno.products;
      this.limiteDeProdutosPagina = retorno.limit;
      this.skip = retorno.skip;
      this.total = retorno.total;
    });
  }

  capturaEventoPaginacao(event?: any) {
    this.skip = event.pageIndex * event.pageSize;
    this.produtosService.buscarPorPagina(30, this.skip).subscribe({
      next: (resp) => {
        this.produtosDaTabela = resp.products;
        this.total = resp.total;
      },
    });
  }

  abrirDialog(event, titulo, id) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = event
    this.dialog.open(DialogComponent, dialogConfig);
    this.emissorDeEventos.emissorEvento.emit(titulo)
    this.emissorDeEventos.emissorEventoId.emit(id)
  }

}
