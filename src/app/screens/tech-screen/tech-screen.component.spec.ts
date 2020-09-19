import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechScreenComponent } from './tech-screen.component';

describe('TechScreenComponent', () => {
  let component: TechScreenComponent;
  let fixture: ComponentFixture<TechScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
