import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IProject } from './project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ProjectComponent {
  project = input.required<IProject>();
}
