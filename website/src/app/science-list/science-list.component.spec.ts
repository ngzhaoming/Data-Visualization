import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceListComponent } from './science-list.component';

describe('ScienceListComponent', () => {
  let component: ScienceListComponent;
  let fixture: ComponentFixture<ScienceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScienceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
