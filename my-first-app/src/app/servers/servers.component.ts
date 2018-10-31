import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',//selecting by attribute
  // selector: '.app-servers', //selecting by class
  selector: 'app-servers',///selecting by element
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName ='testserver';
  serverCreated = false;
  servers = ['Test Server', 'Test Server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created. Name is '+this.serverName;
  }

 // onUpdateServerName(event: any){
  onUpdateServerName(event: Event){  
 //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
