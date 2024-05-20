import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
    tititulo:string = 'Oii'


    constructor(){}
    @Input() nome:string = '';
    ngOnInit(): void {
        
    }

  }
