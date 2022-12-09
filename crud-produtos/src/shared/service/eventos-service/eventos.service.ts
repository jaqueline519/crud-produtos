import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  emissorEvento = new EventEmitter<boolean>()
  emissorEventoId = new EventEmitter<boolean>()

  constructor() { }
}
