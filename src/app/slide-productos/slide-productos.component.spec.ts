import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideProductosComponent } from './slide-productos.component';

describe('SlideProductosComponent', () => {
  let component: SlideProductosComponent;
  let fixture: ComponentFixture<SlideProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
