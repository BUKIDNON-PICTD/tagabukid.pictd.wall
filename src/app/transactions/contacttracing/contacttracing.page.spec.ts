import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContacttracingPage } from './contacttracing.page';

describe('ContacttracingPage', () => {
  let component: ContacttracingPage;
  let fixture: ComponentFixture<ContacttracingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacttracingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContacttracingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
