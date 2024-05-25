import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSendingComponent } from './message-sending.component';

describe('MessageSendingComponent', () => {
  let component: MessageSendingComponent;
  let fixture: ComponentFixture<MessageSendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageSendingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageSendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
