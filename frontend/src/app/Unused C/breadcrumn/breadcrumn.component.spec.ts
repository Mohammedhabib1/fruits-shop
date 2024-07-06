import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumnComponent } from './breadcrumn.component';

describe('BreadcrumnComponent', () => {
  let component: BreadcrumnComponent;
  let fixture: ComponentFixture<BreadcrumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreadcrumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
