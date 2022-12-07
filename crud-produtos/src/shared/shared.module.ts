import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TabelaProdutosComponent } from './containers/tabela-produtos/tabela-produtos.component';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

const modules = [
  MatToolbarModule,
  MatTableModule,
  MatSidenavModule,
  MatCheckboxModule,
  ReactiveFormsModule,
  FormsModule,
  MatFormFieldModule
]

const components = [
    TabelaProdutosComponent,
    HeaderComponent,
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
