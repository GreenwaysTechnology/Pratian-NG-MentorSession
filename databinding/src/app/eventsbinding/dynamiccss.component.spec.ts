import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiccssComponent } from './dynamiccss.component';

describe('DynamiccssComponent', () => {
  let component: DynamiccssComponent;
  let fixture: ComponentFixture<DynamiccssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamiccssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamiccssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
