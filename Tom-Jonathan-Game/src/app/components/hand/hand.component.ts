import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {

  @Input() handChoice?:String
  fist:boolean = false
  paper:boolean = true
  scissors:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  choose(choice:string): void {
    console.log(choice)
  }

}
