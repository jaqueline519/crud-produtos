import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


    constructor(private router: Router){}

    redirecionarParaHome(){
      this.router.navigate(['lista-produtos'])
    }

    redirecionarParaTelaCadastro(){
      this.router.navigate(['cadastrar-produtos'])
    }
}
