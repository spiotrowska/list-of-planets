import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-names-modal',
  templateUrl: './names-modal.component.html',
  styleUrls: ['./names-modal.component.less']
})
export class NamesModalComponent implements OnInit {
  @Input() title: string;
  @Input() names: string[];

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
