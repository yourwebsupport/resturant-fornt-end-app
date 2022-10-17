import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLoginComponent } from './single-login.component';

describe('SingleLoginComponent', () => {
  let component: SingleLoginComponent;
  let fixture: ComponentFixture<SingleLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
