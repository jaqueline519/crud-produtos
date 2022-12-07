import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaProdutosComponent } from '../shared/containers/tabela-produtos/tabela-produtos.component';
import { SharedModule } from '../shared/shared.module';

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
