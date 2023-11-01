import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateListItemComponent } from './create-list-item.component';

describe('CreateListItemComponent', () => {
  let component: CreateListItemComponent;
  let fixture: ComponentFixture<CreateListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateListItemComponent]
    });
    fixture = TestBed.createComponent(CreateListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
