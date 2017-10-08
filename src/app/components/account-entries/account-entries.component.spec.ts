import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountEntriesComponent } from './account-entries.component';

describe('AccountEntriesComponent', () => {
  let component: AccountEntriesComponent;
  let fixture: ComponentFixture<AccountEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
