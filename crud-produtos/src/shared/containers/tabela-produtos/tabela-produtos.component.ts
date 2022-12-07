import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../service/produtos.service';
import { Product } from '../../models/model-lista-produtos.model';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.scss'],
})
export class TabelaProdutosComponent implements OnInit {
  produtosDaTabela: Product[];
  limiteDeProdutosPagina = 30;
  skip = 0;
  total;
  displayedColumns: string[] = ['id', 'title', 'brand', 'price'];

  constructor(private produtosService: ProdutosService) { }

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

  handlePageEvent(event?: any) {
    this.skip = event.pageIndex * event.pageSize;
    this.produtosService.buscarPorPagina(30, this.skip).subscribe({
      next: (resp) => {
        this.produtosDaTabela = resp.products;
        this.total = resp.total;
        console.log(event);
      },
    });
  }
}
