import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutosService } from '../../service/produtos-service/produtos.service';
import { SnackbarService } from '../../snackbar-service/snackbar.service';
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
      estoque: ['', Validators.required],
      marca: ['', Validators.required],
      categoria: [''],
      miniatura: [''],
      imagens: [['']]
    })
  }

  salvar(){
    this.produtosService.cadastrarNovoProduto(this.form.value).subscribe(retorno => {
      this.form.reset();
      this.snackbar.openSnackBarSuccess(retorno.title, 'created')

    });
  }
}
