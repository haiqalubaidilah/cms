import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SemResultPage } from './sem-result.page';

describe('SemResultPage', () => {
  let component: SemResultPage;
  let fixture: ComponentFixture<SemResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SemResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
