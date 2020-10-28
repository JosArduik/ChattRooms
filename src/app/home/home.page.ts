import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ChatsService, chat } from '../services/chats.service';
import { ModalController } from '@ionic/angular';
import { ChatComponent } from '../componentes/chat/chat.component';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public chatRooms : any = [];

  constructor(public authservice: AuthService, public chatservice : ChatsService, private modal : ModalController, public actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.chatservice.getChatRooms().subscribe(chatss => {
      this.chatRooms = chatss;
    })
  }
  openChat(chat) {
    this.modal.create({
      component: ChatComponent,
      componentProps : {
        chat: chat
      }
    }).then((modal) => modal.present())
  } 

  Onlogout() {
    this.authservice.logout();
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Configuración',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Cerrar Sesión',
        role: 'destructive',
        icon: 'log-out',
        handler: () => {
          this.Onlogout();
        }
      }]
    });
    await actionSheet.present();
  }

}
