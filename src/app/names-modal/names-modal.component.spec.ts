import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesModalComponent } from './names-modal.component';

describe('NamesModalComponent', () => {
  let component: NamesModalComponent;
  let fixture: ComponentFixture<NamesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
