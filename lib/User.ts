// import {Contact} from "Contact";

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
  static async fromStorage(s: Storage): Promise<User>{
    let uJS = JSON.parse(await s.getItem('user'));
    let u = new User(s);
    u.alias = uJS.alias;
    return u;
  }

  constructor(private storage: Storage){
    super();
  }

  async save(){

  }
}
