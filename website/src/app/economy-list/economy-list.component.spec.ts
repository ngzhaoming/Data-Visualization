import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomyListComponent } from './economy-list.component';

describe('EconomyListComponent', () => {
  let component: EconomyListComponent;
  let fixture: ComponentFixture<EconomyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
