import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Defaults } from '../../lib/Defaults';
import StatusRPC from '../../lib/cothority/status/status-rpc';
import Log from "../../lib/cothority/log";

@Component({
  selector: 'page-status',
  templateUrl: 'status.html'
})
export class StatusPage {
  nodes = [];

  constructor(public navCtrl: NavController) {
  }

  async ionViewWillEnter() {
    this.nodes = [];
    let list = Defaults.Roster.list;
    let srpc = new StatusRPC(Defaults.Roster);
    for (let i = 0; i < list.length; i++) {
      let node = list[i].description;
      try {
        let s = await srpc.getStatus(i);
        node += ": OK - Port:" + JSON.stringify(s.status.Generic.field["Port"]);
      } catch (e) {
        node += ": Failed";
      }
      this.nodes.push(node);
    }
    this.nodes.sort();
  }

  async addByzCoin(){
    Log.print("will start adding a new byzcoin");
  }

}