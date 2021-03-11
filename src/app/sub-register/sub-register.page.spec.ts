import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubRegisterPage } from './sub-register.page';

describe('SubRegisterPage', () => {
  let component: SubRegisterPage;
  let fixture: ComponentFixture<SubRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubRegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
