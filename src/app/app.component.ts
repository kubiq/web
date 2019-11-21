import { ChangeDetectionStrategy, Component } from '@angular/core';
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
      desc: 'Market analytics tool',
      web: 'https://insights.jumpshot.com',
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
      img: 'http://placekitten.com/g/600/300',
      name: 'PowerFlow',
      desc: 'Tool for creating and managing company workflows',
      web: 'https://powerflow.cz/',
      techs: [
        'Angular',
        'Java',
        'BPMN.io',
        'Camunda',
        'Form.io',
      ],
    }, {
      id: 'george',
      img: 'http://placekitten.com/g/600/300',
      name: 'George',
      desc: 'Migration tool for bank customers to new Internet banking application',
      web: 'https://www.csas.cz/en/internet-banking/george',
      techs: [
        'Angular',
        'Java',
        'PDF generation',
      ],
    }, {
      id: 'esp',
      img: 'assets/projects/esp.jpg',
      name: 'IoT',
      desc: 'Home Automation and IoT',
      web: '',
      techs: [
        'HomeAssistant',
        'Grafana',
        'ZigBee',
        'MQTT',
        'ESP32',
        'ESP8266',
      ],
    },
  ];

}
