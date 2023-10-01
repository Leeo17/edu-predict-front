import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendRecoverEmailComponent } from './send-recover-email.component';

describe('SendRecoverEmailComponent', () => {
  let component: SendRecoverEmailComponent;
  let fixture: ComponentFixture<SendRecoverEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendRecoverEmailComponent]
    });
    fixture = TestBed.createComponent(SendRecoverEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
