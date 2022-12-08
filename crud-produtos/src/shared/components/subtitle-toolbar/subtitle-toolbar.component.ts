import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-subtitle-toolbar',
  templateUrl: './subtitle-toolbar.component.html',
  styleUrls: ['./subtitle-toolbar.component.scss']
})
export class SubtitleToolbarComponent{

  @Input() subtitulo;
  mostrarIconeAdicionar = false;
  constructor(private router: Router){
      router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(
        (event: NavigationEnd | any) => {
          if(event.url.includes('lista-produtos')){
            this.mostrarIconeAdicionar = true
          } else if (event.url.includes('cadastrar-produtos')){
            this.mostrarIconeAdicionar = false
          }
        }
      )

    }

  redirecionarParaTelaCadastro(){
    this.router.navigate(['cadastrar-produtos'])
  }
}
