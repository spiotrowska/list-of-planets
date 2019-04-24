import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit {
  @Input() maxPageNumber: number;
  @Output() pageNumberEmitter: EventEmitter<number> = new EventEmitter<number>();
  @Output() pageSizeEmitter: EventEmitter<number> = new EventEmitter<number>();
  protected paginationForm: FormGroup;
  protected pageNumber = 1;
  protected pageSize = 10;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  protected goToNextPage() {
    if (this.pageNumber < this.maxPageNumber) {
      this.pageNumber = this.pageNumber + 1;
      this.pageNumberEmitter.emit(this.pageNumber);
    }
  }

  protected goToPreviousPage() {
    if (this.pageNumber > 1) {
      this.pageNumber = this.pageNumber - 1;
      this.pageNumberEmitter.emit(this.pageNumber);
    }
  }

  protected goToLastPage() {
    this.pageNumber = this.maxPageNumber;
    this.pageNumberEmitter.emit(this.pageNumber);
  }

  protected goToFirstPage() {
    this.pageNumber = 1;
    this.pageNumberEmitter.emit(this.pageNumber);
  }

  private buildForm() {
    this.paginationForm = this.fb.group({
      pageSize: this.pageSize,
      pageNumber: [this.pageNumber, [Validators.min(1), Validators.max(this.maxPageNumber)]]
    });
    this.onPageFormChanges();
  }

  private onPageFormChanges() {
    this.paginationForm.get('pageSize').valueChanges.subscribe((pageSize: number) =>
      this.pageSizeEmitter.emit(pageSize));
    this.paginationForm.get('pageNumber').valueChanges.subscribe((pageNumber: number) => {
      this.pageNumber = pageNumber;
      if (this.validatePageNumber(pageNumber)) {
        this.pageNumberEmitter.emit(pageNumber);
      }
    });
  }

  private validatePageNumber(pageNumber: number): boolean {
    return pageNumber >= 1 && pageNumber <= this.maxPageNumber;
  }
}
