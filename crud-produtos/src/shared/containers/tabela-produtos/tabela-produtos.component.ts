import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../service/produtos.service';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.scss']
})


export class TabelaProdutosComponent implements OnInit {

  constructor(private produtosService: ProdutosService) { }
  elementosDaTabela: [];

  ngOnInit(): void {
    this.listarProdutos()
  }

  listarProdutos() {
    this.produtosService.buscarProdutos().subscribe((retorno => {
      this.elementosDaTabela = retorno
    }));
  }
}

