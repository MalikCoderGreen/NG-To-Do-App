import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent implements OnInit {
  private canvas : HTMLCanvasElement;


  constructor() {
    var canvas = document.getElementById("canvas") as HTMLCanvasElement;
    this.canvas = canvas;
   }

  ngOnInit(): void {
    

  }

}
