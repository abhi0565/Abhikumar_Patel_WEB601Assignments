import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchstockComponent } from './searchstock.component';

describe('SearchstockComponent', () => {
  let component: SearchstockComponent;
  let fixture: ComponentFixture<SearchstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchstockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
