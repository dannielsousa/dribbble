import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaShotsComponent } from './busca-shots.component';

describe('BuscaShotsComponent', () => {
  let component: BuscaShotsComponent;
  let fixture: ComponentFixture<BuscaShotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaShotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaShotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
