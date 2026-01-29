import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectComponent } from './project.component';
import { IProject } from './project.model';

describe('ProjectComponent', () => {
  let fixture: ComponentFixture<ProjectComponent>;
  let component: ProjectComponent;

  const mockProject: IProject = {
    id: 'test',
    name: 'Test Project',
    desc: 'Test description',
    img: ['test.png'],
    web: ['https://example.com'],
    techs: ['Angular', 'TypeScript'],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('project', mockProject);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have project input', () => {
    expect(component.project()).toEqual(mockProject);
  });
});
