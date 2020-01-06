import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUserComponent } from './post-user.component';

describe('PostUserComponent', () => {
  let component: PostUserComponent;
  let fixture: ComponentFixture<PostUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
