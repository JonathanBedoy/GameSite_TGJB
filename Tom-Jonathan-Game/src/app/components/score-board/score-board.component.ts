import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent implements OnInit {

  round: number = 0
  option: string = ''
  computerOption = ''
  result: string = ''
  roundsWon:number = 0
  roundsLost:number = 0
  thinking:boolean = false


  constructor() { }

  ngOnInit(): void {
  }

  startRound(decision: string):void {
    if (this.thinking) return;
    this.thinking = true
    setTimeout(() => {
      this.chose(decision)
    }, 3000)
  }

  chose(decision: string): void {
    this.option = decision
    // after user makes a decision
    // computer needs to make one too
    let randNumber = Math.floor(Math.random() * 3)
    if (randNumber == 0) {
      this.computerOption = 'fist'
    } else if (randNumber == 1) {
      this.computerOption = 'scissors'
    } else if (randNumber == 2) {
      this.computerOption = 'paper'
    }
    console.log(this.computerOption, this.option)

    if (this.option === this.computerOption) {
      this.result = 'tie'
    } else if (this.option == 'fist') {
      if (this.computerOption == 'paper') {
        this.result = 'Lost'
      } else {
        this.result = 'Won'
      }
    } else if (this.option == 'paper') {
      if (this.computerOption == 'scissors') {
        this.result = 'Lost'
      } else {
        this.result = 'Won'
      }
    } else if (this.option == 'scissors') {
      if (this.computerOption == 'fist') {
        this.result = 'Lost'
      } else {
        this.result = 'Won'
      }
    }
    this.round++;
    if (this.result == 'Won') this.roundsWon++
    else if (this.result == 'Lost') this.roundsLost++
    console.log(this.result)
    this.thinking = false

  }

  clear():void {
    this.round = 0
    this.option = ''
    this.computerOption = ''
    this.result = ''
    this.roundsWon = 0
    this.roundsLost = 0
  }


}
