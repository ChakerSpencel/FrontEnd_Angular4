import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { livreComponent } from './livre.component';

describe('livreComponent', () => {
  let component: livreComponent;
  let fixture: ComponentFixture<livreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ livreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(livreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
