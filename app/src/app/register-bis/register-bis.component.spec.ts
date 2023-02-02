import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBisComponent } from './register-bis.component';

describe('RegisterBisComponent', () => {
  let component: RegisterBisComponent;
  let fixture: ComponentFixture<RegisterBisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterBisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterBisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
