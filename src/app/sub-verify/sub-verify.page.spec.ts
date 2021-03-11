import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubVerifyPage } from './sub-verify.page';

describe('SubVerifyPage', () => {
  let component: SubVerifyPage;
  let fixture: ComponentFixture<SubVerifyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubVerifyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubVerifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
