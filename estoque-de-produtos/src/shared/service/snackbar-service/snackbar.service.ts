import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})

export class SnackbarService {

  posicaoHorizontal: MatSnackBarHorizontalPosition = 'end';
  posicaoVertical: MatSnackBarVerticalPosition = 'top';

  constructor(private  snackBar: MatSnackBar){

  }

  abrirSnackBar(valueSnackBar, tipoDeAcao) {
    this.snackBar.open(`successfully ${tipoDeAcao}: ${valueSnackBar}`, 'ok', {
      horizontalPosition: this.posicaoHorizontal,
      verticalPosition: this.posicaoVertical,
    });

}
}
