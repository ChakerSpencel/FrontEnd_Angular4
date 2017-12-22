import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { authSuccesModalComponent } from './authSuccesModal.component';




describe('authSuccesModalComponent', () => {
  let component: authSuccesModalComponent;
  let fixture: ComponentFixture<authSuccesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ authSuccesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(authSuccesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
