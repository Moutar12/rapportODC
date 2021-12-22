import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmprunteComponent } from './edit-emprunte.component';

describe('EditEmprunteComponent', () => {
  let component: EditEmprunteComponent;
  let fixture: ComponentFixture<EditEmprunteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmprunteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmprunteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
