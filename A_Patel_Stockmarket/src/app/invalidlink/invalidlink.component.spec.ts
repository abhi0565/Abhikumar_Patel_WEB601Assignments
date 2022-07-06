import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidlinkComponent } from './invalidlink.component';

describe('InvalidlinkComponent', () => {
  let component: InvalidlinkComponent;
  let fixture: ComponentFixture<InvalidlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidlinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
