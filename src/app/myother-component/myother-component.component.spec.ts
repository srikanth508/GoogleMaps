import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyotherComponentComponent } from './myother-component.component';

describe('MyotherComponentComponent', () => {
  let component: MyotherComponentComponent;
  let fixture: ComponentFixture<MyotherComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyotherComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyotherComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
