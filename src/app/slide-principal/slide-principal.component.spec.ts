import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidePrincipalComponent } from './slide-principal.component';

describe('SlidePrincipalComponent', () => {
  let component: SlidePrincipalComponent;
  let fixture: ComponentFixture<SlidePrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidePrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidePrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
