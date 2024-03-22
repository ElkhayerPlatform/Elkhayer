import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalScrollPostsComponent } from './horizontal-scroll-posts.component';

describe('HorizontalScrollPostsComponent', () => {
  let component: HorizontalScrollPostsComponent;
  let fixture: ComponentFixture<HorizontalScrollPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorizontalScrollPostsComponent]
    });
    fixture = TestBed.createComponent(HorizontalScrollPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
