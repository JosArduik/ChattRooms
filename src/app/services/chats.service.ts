import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { map } from 'rxjs/operators';
import { message } from '../models/message';

export interface chat {
  descripcion : string
  name : string
  id : string
  img : string
}

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor(private db : AngularFirestore) { }

  getChatRooms(){
    return this.db.collection('users').snapshotChanges().pipe(map(rooms => {
      return rooms.map(a => {
        const data = a.payload.doc.data() as chat;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
  }
  getChatts(chat_id : string) {
    return this.db.collection('users').doc(chat_id).valueChanges()
  }
  sendMsgToFirebase(message : message, chat_id : string){
    this.db.collection('users').doc(chat_id).update({
      messages : firestore.FieldValue.arrayUnion(message),
    })
  }
}
