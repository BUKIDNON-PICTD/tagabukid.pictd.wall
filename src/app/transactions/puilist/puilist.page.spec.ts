import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PuilistPage } from './puilist.page';

describe('PuilistPage', () => {
  let component: PuilistPage;
  let fixture: ComponentFixture<PuilistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuilistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PuilistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
