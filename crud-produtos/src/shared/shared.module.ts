import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TabelaProdutosComponent } from './containers/tabela-produtos/tabela-produtos.component';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';

const modules = [
  MatToolbarModule
]

const components = [
    TabelaProdutosComponent,
    HeaderComponent
]
@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ...modules
  ],
  exports: [
    ...components,
    ...modules
  ]
})
export class SharedModule { }
