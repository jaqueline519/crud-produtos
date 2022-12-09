import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaProdutosComponent } from '../shared/containers/tabela-produtos/tabela-produtos.component';
import { CadastrarProdutoComponent } from '../shared/containers/cadastrar-produto/cadastrar-produto.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'lista-produtos',
        component: TabelaProdutosComponent
      },
      {
        path: 'cadastrar-produtos',
        component: CadastrarProdutoComponent
      },
      {
        path: '**',
        redirectTo: 'lista-produtos'
    }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
