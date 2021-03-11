import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EreportPage } from './ereport.page';

describe('EreportPage', () => {
  let component: EreportPage;
  let fixture: ComponentFixture<EreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
