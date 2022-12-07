import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dyncamic-component',
  templateUrl: './dyncamic-component.component.html',
  styleUrls: ['./dyncamic-component.component.scss']
})
export class DyncamicCOmponentComponent implements OnInit {
  @Output() emitHobby = new EventEmitter<string>;
  hobby:any = '';
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    this.emitHobby.emit(this.hobby);
  }

}
function output() {
  throw new Error('Function not implemented.');
}

