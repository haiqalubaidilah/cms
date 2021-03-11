import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginIssuePage } from './login-issue.page';

describe('LoginIssuePage', () => {
  let component: LoginIssuePage;
  let fixture: ComponentFixture<LoginIssuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginIssuePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginIssuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
