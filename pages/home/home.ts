import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  hasId = false;

  constructor(public navCtrl: NavController, 
    private storage: Storage,
    private zone: NgZone,
    public formBuilder: FormBuilder
    ) {
  }

  form = this.formBuilder.group({
    id: [''],
  });

  async addID(){
    console.log("form is:");
    console.log(this.form.controls["id"].value);
  }
}
