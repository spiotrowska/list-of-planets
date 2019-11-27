import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit {
  @Output() phraseEmitter: EventEmitter<string> = new EventEmitter<string>();
  filterForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  emitPhrase() {
    const phrase = this.filterForm.get('phrase').value;
    this.phraseEmitter.emit(phrase);
  }

  private buildForm() {
    this.filterForm = this.fb.group({
      phrase: ''
    });
  }

}
