import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyncamicCOmponentComponent } from './dyncamic-component.component';

describe('DyncamicCOmponentComponent', () => {
  let component: DyncamicCOmponentComponent;
  let fixture: ComponentFixture<DyncamicCOmponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DyncamicCOmponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DyncamicCOmponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
