import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestServiceConnectionComponent } from './test-service-connection.component';

describe('TestServiceConnectionComponent', () => {
  let component: TestServiceConnectionComponent;
  let fixture: ComponentFixture<TestServiceConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestServiceConnectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestServiceConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
