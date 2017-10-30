import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroenComponent } from './groen.component';

describe('GroenComponent', () => {
  let component: GroenComponent;
  let fixture: ComponentFixture<GroenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
