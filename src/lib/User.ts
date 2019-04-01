// import {Contact} from "Contact";
import { Storage } from '@ionic/storage';

export class Contact {
  static fromJSON(s: string): Contact{
    let js = JSON.parse(s);
    let c = new Contact();
    c.alias = js.alias;
    return c;
  }

  public alias: string;

  constructor(){
  }

  toJSON(): string{
    return JSON.stringify(this);
  }
}

export class User extends Contact{
  public storage: Storage;

  constructor(){
    super();
  }

  async load(s: Storage): Promise<any>{
    this.storage = s;
    let uJS = JSON.parse(await s.get('user'));
    if (uJS){
      this.alias = uJS.alias;
    }
  }

  async save(){
    await this.storage.set('user', JSON.stringify(this));
  }
}

export let gUser = new User();