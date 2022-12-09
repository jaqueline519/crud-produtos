import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutosService } from '../../service/produtos-service/produtos.service';
import { SnackbarService } from '../../service/snackbar-service/snackbar.service';
import { Product } from '../../models/model-lista-produtos.model';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.scss']
})
export class CadastrarProdutoComponent implements OnInit {
  form: FormGroup;
  produtoAdicionado: Product;

  constructor(
    private formBuilder: FormBuilder,
    private produtosService: ProdutosService,
    private snackbar: SnackbarService
    ){
    this.criarFormulario()
  }

  ngOnInit(): void {
  }

  criarFormulario(){
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      descricao: [''],
      valor: ['', Validators.required],
      porcentagemDesconto: [''],
      avaliacao: [''],
      estoque: [''],
      marca: ['', Validators.required],
      categoria: ['']
    })
  }

  salvar(){
    this.produtosService.cadastrarNovoProduto(this.form.value.title).subscribe(produto => {
      this.form.reset();
      this.snackbar.abrirSnackBar(produto.title, 'created')

    });
  }
}
