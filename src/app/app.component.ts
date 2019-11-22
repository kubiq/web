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
      img: 'assets/projects/ff.png',
      name: 'Insights',
      desc: 'Website Metrics: Traffic Statistics, Analytics & Conversion',
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
      img: 'assets/projects/notix.jpg',
      name: 'PowerFlow',
      desc: 'Tool for creating and managing company workflows',
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
      img: 'assets/projects/george.jpg',
      name: 'George',
      desc: 'Migration tool for bank customers to new Internet banking application',
      web: option('https://www.csas.cz/en/internet-banking/george'),
      techs: [
        'Angular',
        'Java',
        'PDF generation',
      ],
    }, {
      id: 'ts',
      img: 'assets/projects/timesheet.png',
      name: 'Timesheet',
      desc: 'Internal tool for tracking time spent working on tasks',
      web: none,
      techs: [
        'Angular',
        'Material Design',
        'Node.js',
        'Excel exports',
      ],
    }, {
      id: 'esp',
      img: 'assets/projects/esp.jpg',
      name: 'IoT',
      desc: 'Home Automation and IoT',
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
