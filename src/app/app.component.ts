import { Component } from '@angular/core';
import { SignalRServiceService } from './signal-rservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularSignalRApp';

  constructor(private signalRService: SignalRServiceService) {}

  public model = { user:"", message:""};
  public items : [string,string][]=[];  
  
  ngOnInit() {
    this.signalRService.connection.start().then(() => console.log("Connection started!"));
    this.signalRService.connection.on("ReceiveMessage", (user, message) => { 
      this.items.push([user,message]);
      console.log(`received message, user: ${user}  message: ${message}`);
    });
  }

  public async onSubmit() { 
    console.log(this.model) 
    this.signalRService.connection.invoke("SendMessage", this.model.user, this.model.message);
  }
}
