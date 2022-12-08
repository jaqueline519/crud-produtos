import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})

export class SnackbarService {

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private  _snackBar: MatSnackBar){

  }

  openSnackBarSuccess(valueSnackBar, tipoDeAcao) {
    this._snackBar.open(`successfully ${tipoDeAcao}: ${valueSnackBar}`, 'ok', {
      panelClass: ['color-snackbar'],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });

}
}
