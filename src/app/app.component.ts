import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IProject } from './project/project.model';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ProjectComponent],
})
export class AppComponent {

  projects: IProject[] = [
    {
      id: 'pmx',
      img: ['assets/projects/pmx.png'],
      name: 'ProMarginX',
      desc: 'Financial services app for quote generation and margin analysis.',
      web: [],
      techs: [
        'Angular 21',
        'NgRx',
        'Material',
        'Tailwind',
        'Keycloak',
        'Playwright',
      ],
    },
    {
      id: 'cnv',
      img: ['assets/projects/cnv.png'],
      name: 'Chci na Vejšku',
      desc: 'Educational platform helping students prepare for university admission.',
      web: ['https://chcinavejsku.cz/'],
      techs: [
        'React 19',
        'Vite',
        'TanStack',
        'Tailwind',
        'i18next',
        'AI Chat',
      ],
    },
    {
      id: 'ob',
      img: ['assets/projects/ob.webp'],
      name: 'Open-Bean',
      desc: 'We create internal facing applications for BigData.',
      web: ['https://www.open-bean.com/'],
      techs: [
        'Scala',
        'Akka',
        'ZIO',
        'GraphQL',
        'AWS',
        'BigData',
        'Kubernetes',
        'Spark',
      ],
    },
    {
      id: 'soperak',
      img: ['assets/projects/soperak.png'],
      name: 'Soperak',
      desc: 'Operational leasing platform for vehicle search and filtering.',
      web: ['https://www.soperak.cz/'],
      techs: [
        'React 18',
        'TypeScript',
        'Webpack',
        'AWS',
        'CloudFront',
        'Nunjucks',
      ],
    },
    {
      id: 'fevo',
      img: ['assets/projects/fevo2.jpg'],
      name: 'Fevo',
      desc: 'Social Cart. Agile prototyping, build and deploy fast.',
      web: ['https://www.fevo.com'],
      techs: [
        'Scala',
        'Akka',
        'ReactJS',
        'GraphQL',
        'AWS',
        'Terraform',
        'Kubernetes',
      ],
    },
    {
      id: 'ff',
      img: ['assets/projects/ff.jpg'],
      name: 'Insights',
      desc: 'Website Metrics: Traffic Statistics, Analytics & Conversion.',
      web: ['https://insights.jumpshot.com'],
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
      img: ['assets/projects/notix.jpg'],
      name: 'PowerFlow',
      desc: 'Tool for creating and managing company workflows.',
      web: ['https://powerflow.cz/'],
      techs: [
        'Angular',
        'WebComponents',
        'Java',
        'BPMN.io',
        'Camunda',
        'Form.io',
      ],
    }, {
      id: 'george',
      img: ['assets/projects/george.jpg'],
      name: 'George',
      desc: 'Migration app for bank customers to a new Internet Banking.',
      web: ['https://www.csas.cz/en/internet-banking/george'],
      techs: [
        'Angular',
        'Java',
        'PDF generation',
      ],
    }, {
      id: 'ts',
      img: ['assets/projects/timesheet.jpg'],
      name: 'Timesheet',
      desc: 'Internal app for tracking time spent working on tasks.',
      web: [],
      techs: [
        'Angular',
        'Material Design',
        'Node.js',
        'Excel export',
      ],
    }, {
      id: 'nat',
      img: [],
      name: 'Natty',
      desc: 'Mobile app for tracking employees skill-set.',
      web: [],
      techs: [
        'Angular',
        'Ionic',
        'Node.js',
        'Mongo',
      ],
    }, {
      id: 'edu',
      img: ['assets/projects/edu.jpg'],
      name: 'WikiSlide',
      desc: 'Twitter like cards for students to learn and prepare.',
      web: [],
      techs: [
        'Angular',
        'Ionic',
        'Node.js',
        'Mongo',
      ],
    }, {
      id: 'esp',
      img: ['assets/projects/esp.jpg'],
      name: 'IoT',
      desc: 'Home Automation and IoT, making my home smart (:.',
      web: ['https://github.com/kubiq/esphome'],
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
