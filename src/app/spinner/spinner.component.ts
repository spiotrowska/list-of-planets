import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.less']
})
export class SpinnerComponent implements OnInit {
  @Input() size: string;
  @Input() withTitle = true;

  constructor() { }

  ngOnInit() {
  }

}
