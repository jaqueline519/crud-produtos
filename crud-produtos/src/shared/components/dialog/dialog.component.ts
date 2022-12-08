import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventosService } from '../../service/eventos-service/eventos.service';
import { ProdutosService } from '../../service/produtos-service/produtos.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})


export class DialogComponent{

  form: FormGroup;
  idProdutoAtual;

  constructor(
    private emissorDeEventos: EventosService,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private formBuilder: FormBuilder,
    private produtosService: ProdutosService
  ) {

    this.criarFormulario()
    this.emissorDeEventos.emissorEvento.subscribe(event => {
      if (event) {
        this.adicionaValorAoForm(event)
      }
    })
    this.emissorDeEventos.emissorEventoId.subscribe(event => {
      if (event) {
        this.idProdutoAtual = event
      }
    })
  }

  criarFormulario(){
    this.form = this.formBuilder.group({
      titulo: ['', Validators.required],
    })
  }

  adicionaValorAoForm(event){
    this.form.patchValue({
      titulo: event
    })
  }

  cancelar(): void {
    this.dialogRef.close();
  }

  salvar(){
  }

  editTituloProdutoIndex() {
    this.produtosService.editarTituloProdutoAtual(this.form.value.titulo, this.idProdutoAtual).subscribe(
     itemEditado => {
       console.log("ITEM EDITADO", itemEditado)
       return itemEditado
      })
      this.dialogRef.close();
   }
}
