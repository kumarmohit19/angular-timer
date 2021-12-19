import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Input() initial: number;
  initialValue: number;
  timerInterval: any;

  ngOnInit() {
    this.initialValue= this.initial;
    //console.log(this.initialValue)
    this.timerInterval  = setInterval(()=>{
      if(this.initialValue > 0) {
        this.initialValue--;
      }
    }, 1000);
  }

  constructor() {
  }

  handleStopTimer(){
    clearInterval(this.timerInterval);
  }

}
