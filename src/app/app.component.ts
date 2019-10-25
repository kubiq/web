import { Component } from '@angular/core';
import { IProject } from './project/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  projects: IProject[] = [{
    id: 'ff',
    img: 'https://via.placeholder.com/250x150',
    name: 'Insights',
    desc: 'Shopping market analytics tool',
  }];

}
