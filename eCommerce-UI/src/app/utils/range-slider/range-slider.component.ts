import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GlobalConstants } from 'src/app/constants/global.constants';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss']
})
export class RangeSliderComponent implements OnInit {

  GlobalConstants = GlobalConstants;

  @Output() myRange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  updateRange(range: any) {
    this.myRange.emit(range);
  }
}
