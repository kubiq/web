import { Injectable } from '@angular/core';
import { Option } from 'ts-option';

export interface IProject {
  id: string;
  img: string;
  name: string;
  desc: string;
  web: Option<string>;
  techs: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }
}
