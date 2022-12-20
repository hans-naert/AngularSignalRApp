import { Injectable } from '@angular/core';
import {HubConnectionBuilder} from "@microsoft/signalr";

@Injectable({
  providedIn: 'root'
})
export class SignalRServiceService {

  constructor() { }

  
  public connection = new HubConnectionBuilder()
  .withUrl("http://localhost:5299/chathub")
  .build();
}
