import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLoginComponent } from './full-login.component';

describe('FullLoginComponent', () => {
  let component: FullLoginComponent;
  let fixture: ComponentFixture<FullLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
