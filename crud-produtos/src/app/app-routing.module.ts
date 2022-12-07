import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaProdutosComponent } from '../shared/containers/tabela-produtos/tabela-produtos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'lista-produtos',
        component: TabelaProdutosComponent
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
