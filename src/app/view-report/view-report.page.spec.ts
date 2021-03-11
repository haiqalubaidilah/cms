import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewReportPage } from './view-report.page';

describe('ViewReportPage', () => {
  let component: ViewReportPage;
  let fixture: ComponentFixture<ViewReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
