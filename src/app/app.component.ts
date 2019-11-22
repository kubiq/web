import { ChangeDetectionStrategy, Component } from '@angular/core';
import { none, option } from 'ts-option';
import { IProject } from './project/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  projects: IProject[] = [
    {
      id: 'ff',
      img: option('assets/projects/ff.webp'),
      name: 'Insights',
      desc: 'Website Metrics: Traffic Statistics, Analytics & Conversion.',
      web: option('https://insights.jumpshot.com'),
      techs: [
        'Angular',
        'TypeScript',
        'Scala',
        'BigData',
        'D3.js',
        'Docker',
      ],
    }, {
      id: 'pf',
      img: option('assets/projects/notix.webp'),
      name: 'PowerFlow',
      desc: 'Tool for creating and managing company workflows.',
      web: option('https://powerflow.cz/'),
      techs: [
        'Angular',
        'Java',
        'BPMN.io',
        'Camunda',
        'Form.io',
      ],
    }, {
      id: 'george',
      img: option('assets/projects/george.webp'),
      name: 'George',
      desc: 'Migration app for bank customers to a new Internet Banking.',
      web: option('https://www.csas.cz/en/internet-banking/george'),
      techs: [
        'Angular',
        'Java',
        'PDF generation',
      ],
    }, {
      id: 'ts',
      img: option('assets/projects/timesheet.webp'),
      name: 'Timesheet',
      desc: 'Internal app for tracking time spent working on tasks.',
      web: none,
      techs: [
        'Angular',
        'Material Design',
        'Node.js',
        'Excel export',
      ],
    }, {
      id: 'nat',
      img: none,
      name: 'Natty',
      desc: 'Mobile app for tracking employees skill-set.',
      web: none,
      techs: [
        'Angular',
        'Ionic',
        'Node.js',
        'Mongo',
      ],
    }, {
      id: 'edu',
      img: option('assets/projects/edu.webp'),
      name: 'WikiSlide',
      desc: 'Twitter like cards for students to learn and prepare.',
      web: none,
      techs: [
        'Angular',
        'Ionic',
        'Node.js',
        'Mongo',
      ],
    }, {
      id: 'esp',
      img: option('assets/projects/esp.webp'),
      name: 'IoT',
      desc: 'Home Automation and IoT, making my home smart (:.',
      web: option('https://github.com/kubiq/esphome'),
      techs: [
        'HomeAssistant',
        'Grafana',
        'ZigBee',
        'MQTT',
        'ESP32',
        'ESP8266',
        'Lua',
        'C++'
      ],
    },
  ];

}
