import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawSidebarComponent } from './raw-sidebar.component';

describe('RawSidebarComponent', () => {
  let component: RawSidebarComponent;
  let fixture: ComponentFixture<RawSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
