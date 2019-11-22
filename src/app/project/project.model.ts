import { Option } from 'ts-option';

export interface IProject {
  id: string;
  img: Option<string>;
  name: string;
  desc: string;
  web: Option<string>;
  techs: string[];
}
