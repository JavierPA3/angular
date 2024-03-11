import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoritationComponent } from './autoritation.component';

describe('AutoritationComponent', () => {
  let component: AutoritationComponent;
  let fixture: ComponentFixture<AutoritationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutoritationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutoritationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
