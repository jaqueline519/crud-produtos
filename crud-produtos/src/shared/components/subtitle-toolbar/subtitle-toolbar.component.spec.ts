import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtitleToolbarComponent } from './subtitle-toolbar.component';

describe('SubtitleToolbarComponent', () => {
  let component: SubtitleToolbarComponent;
  let fixture: ComponentFixture<SubtitleToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtitleToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtitleToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
