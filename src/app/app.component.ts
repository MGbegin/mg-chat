import { Component } from '@angular/core';
import { MessageService } from './service/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mg-chat';
  message = "";
  chats = [
    'hay',
    'how are you',
    'i am fine thank you for asking',
    'well what are you doing right now',
    'well i am writing a code for chat system',
    'wow great'
  ];
  constructor(message: MessageService){}
  addChat(){
    if (this.message.length === 0){
      return;
    }
    this.chats.push(this.message);
    this.message = '';
    window.setInterval(() => {
      const elem = document.getElementById('scrolldiv');
      if(elem?.scrollTop != null){
          elem.scrollTop = elem.scrollHeight;
      }
      
    },500);
  }
}
