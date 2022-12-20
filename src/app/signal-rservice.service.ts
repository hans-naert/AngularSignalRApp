import { Injectable } from '@angular/core';
import {HubConnection, HubConnectionBuilder} from "@microsoft/signalr";

@Injectable({
  providedIn: 'root'
})
export class SignalRServiceService {

  constructor() { 


    this.connection = new HubConnectionBuilder()
    .withUrl("http://localhost:5299/chathub")
    .build();
    
    this.connection.start()
    .then(() => console.log("Connection started!"))
    .catch((err: any) => console.log("Error while starting connection: " + err))
  }

  
  public connection : HubConnection;
  
}
