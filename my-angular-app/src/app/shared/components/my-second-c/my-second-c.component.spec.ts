import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySecondCComponent } from './my-second-c.component';

describe('MySecondCComponent', () => {
  let component: MySecondCComponent;
  let fixture: ComponentFixture<MySecondCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySecondCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySecondCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
