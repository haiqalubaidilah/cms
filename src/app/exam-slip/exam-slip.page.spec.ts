import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExamSlipPage } from './exam-slip.page';

describe('ExamSlipPage', () => {
  let component: ExamSlipPage;
  let fixture: ComponentFixture<ExamSlipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamSlipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExamSlipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
