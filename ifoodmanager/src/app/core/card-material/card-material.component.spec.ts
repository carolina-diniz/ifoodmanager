import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMaterialComponent } from './card-material.component';

describe('CardMaterialComponent', () => {
  let component: CardMaterialComponent;
  let fixture: ComponentFixture<CardMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
