import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Validators, FormBuilder } from '@angular/forms';
import Log from '../../lib/cothority/log';
import StatusRPC from '../../lib/cothority/status/status-rpc';
import {Roster} from '../../lib/cothority/network/proto';
import {Defaults} from '../../lib/Defaults';
import {User} from '../../lib/User';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: User;
  hasId = false;
  hasPersonal = false;
  hasProtected = false;
  accesses = [];
  requests = [];

  constructor(public navCtrl: NavController, 
    private storage: Storage,
    private zone: NgZone,
    public formBuilder: FormBuilder
    ) {
  }

  async ionViewWillEnter() {
      this.storage.get('hasId').then(hi => {
        this.hasId = hi;
      })
  }

  form = this.formBuilder.group({
    id: [''],
  });

  async addID(){
    this.hasId = true;
    await this.storage.set('hasId', true);
  }
}

export class Request {
  constructor(public source: string){

  }
}