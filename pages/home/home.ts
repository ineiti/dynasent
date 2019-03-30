import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Validators, FormBuilder } from '@angular/forms';
import Log from '../../lib/cothority/log';
import StatusRPC from '../../lib/cothority/status/status-rpc';
import {Roster} from '../../lib/cothority/network/proto';
import {Defaults} from '../../lib/Defaults';

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
    Log.print("log rulez!");
    let srpc = new StatusRPC(Defaults.Roster);
    Log.print(await srpc.getStatus());
    console.log("form is:");
    console.log(this.form.controls["id"].value);
  }
}
