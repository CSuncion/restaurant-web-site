import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-increasing',
  templateUrl: './increasing.component.html',
  styleUrls: [
    './increasing.component.css'
  ]
})
export class IncreasingComponent implements OnInit {
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input('value')
  progress: number = 40;

  @Input()
  btnClass: string = 'btn-primary';


  @Output('value')
  valueOutput: EventEmitter<number> = new EventEmitter();

  // @Input()
  // progress: number = 50;

  changeValue(value: number) {
    if (this.progress >= 100 && value >= 1) {
      this.valueOutput.emit(100);
      return this.progress = 100;
    }

    if (this.progress == 1 && value < 1) {
      this.valueOutput.emit(1);
      return this.progress = 1;
    }

    this.progress = this.progress + value;
    this.valueOutput.emit(this.progress);

  }

  onChange(newValue: number) {
    // this.valueOutput.emit(value);
    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 1) {
      this.progress = 1;
    } else {
      this.progress = newValue;
    }

  }
}
