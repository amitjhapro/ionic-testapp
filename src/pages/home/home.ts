import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RestClientProvider} from '../../providers/rest-client/rest-client'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public restClient : RestClientProvider) {

  }

  handleFetchUsers(){
    console.log ("Fetch users starrt ");
    this.restClient.getUsers().subscribe(
      objRes => console.log ("Users list", objRes),
      err => console.log ("error in fetching users " , err)
    );
  }

  handleAddUsers(){
    console.log ("Add users starrt ");
    let postObj:any = {};
    postObj.name = "Amit";
    postObj.job = "Dev";

    this.restClient.postUser(postObj).subscribe(
      objRes => console.log ("Users Add Res = ", objRes),
      err => console.log ("error in adding users " , err)
    );
  }
}
