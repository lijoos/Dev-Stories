import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjDescDialogComponent } from './proj-desc-dialog.component';

describe('ProjDescDialogComponent', () => {
  let component: ProjDescDialogComponent;
  let fixture: ComponentFixture<ProjDescDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjDescDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjDescDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
