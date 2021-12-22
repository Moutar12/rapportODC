import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmprunteComponent } from './add-emprunte.component';

describe('AddEmprunteComponent', () => {
  let component: AddEmprunteComponent;
  let fixture: ComponentFixture<AddEmprunteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmprunteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmprunteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
