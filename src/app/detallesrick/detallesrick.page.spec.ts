import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesrickPage } from './detallesrick.page';

describe('DetallesrickPage', () => {
  let component: DetallesrickPage;
  let fixture: ComponentFixture<DetallesrickPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetallesrickPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
