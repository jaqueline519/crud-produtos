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
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import { DialogComponent } from './components/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

const modules = [
  MatToolbarModule,
  MatTableModule,
  MatSidenavModule,
  MatCheckboxModule,
  ReactiveFormsModule,
  FormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatIconModule,
  MatDialogModule,
  MatButtonModule
]

const components = [
    TabelaProdutosComponent,
    HeaderComponent,
    DialogComponent,
]
@NgModule({
  declarations: [
    ...components,
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
