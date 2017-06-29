import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaShotsComponent } from './lista-shots.component';

describe('ListaShotsComponent', () => {
  let component: ListaShotsComponent;
  let fixture: ComponentFixture<ListaShotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaShotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaShotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
