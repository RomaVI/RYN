import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoARComponent } from './logo-ar.component';

describe('LogoARComponent', () => {
  let component: LogoARComponent;
  let fixture: ComponentFixture<LogoARComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoARComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
