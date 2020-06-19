import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyStatisticsComponent } from './vacancy-statistics.component';

describe('VacancyStatisticsComponent', () => {
  let component: VacancyStatisticsComponent;
  let fixture: ComponentFixture<VacancyStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacancyStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
