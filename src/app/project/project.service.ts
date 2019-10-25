import { Injectable } from '@angular/core';

export interface IProject {
  id: string;
  img: string;
  name: string;
  desc: string;
  web: string;
  techs: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }
}
