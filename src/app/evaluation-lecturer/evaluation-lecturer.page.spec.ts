import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EvaluationLecturerPage } from './evaluation-lecturer.page';

describe('EvaluationLecturerPage', () => {
  let component: EvaluationLecturerPage;
  let fixture: ComponentFixture<EvaluationLecturerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationLecturerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EvaluationLecturerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
