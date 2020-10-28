import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { message } from '../../models/message';
import { ChatsService } from '../../services/chats.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  public chat: any;
  public mensajes = [];
  public msg : string;
  //public message : message;
  public room: any;

  constructor(private navparams : NavParams, private modal : ModalController, private chatService : ChatsService) { }

  ngOnInit() {
    this.chatService.getChatts(this.chat.id).subscribe( room => {
      //console.log(room);
      this.room = room;
    })
    
    this.chat = this.navparams.get('chat')
  }
  close(){
    this.modal.dismiss();
  }
  sendMessage(){
    const mensajer : message = {
      content : this.msg,
      type : 'text',
      date : new Date()
    }
    //this.mensajes.push(this.msg);
    //this.msg = "";
    this.chatService.sendMsgToFirebase(mensajer, this.chat.id);
    this.msg = "";
  }
 

}
