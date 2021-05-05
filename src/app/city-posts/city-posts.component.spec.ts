import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityPostsComponent } from './city-posts.component';

describe('CityPostsComponent', () => {
  let component: CityPostsComponent;
  let fixture: ComponentFixture<CityPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
