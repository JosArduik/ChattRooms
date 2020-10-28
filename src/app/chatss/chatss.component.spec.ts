import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatssComponent } from './chatss.component';

describe('ChatssComponent', () => {
  let component: ChatssComponent;
  let fixture: ComponentFixture<ChatssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatssComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
