import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IProject } from './project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent {

  @Input() project: IProject;

}
