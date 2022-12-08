import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title;

    constructor(private router: Router){
      router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(
        (event: NavigationEnd | any) => {
          if(event.url.includes('lista-produtos')){
            this.title = 'Product List'
          } else if (event.url.includes('cadastrar-produtos')){
            this.title = 'Product Registration'
          }
        }
      )

    }

    redirecionarParaHome(){
      this.router.navigate(['lista-produtos'])
    }

}
