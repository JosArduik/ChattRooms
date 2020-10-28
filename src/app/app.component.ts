import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAqzZlIZqFUA2Z-SVPFLLd93FI_vs1D8lk",
  authDomain: "whatsapp-68de6.firebaseapp.com",
  databaseURL: "https://whatsapp-68de6.firebaseio.com",
  projectId: "whatsapp-68de6",
  storageBucket: "whatsapp-68de6.appspot.com",
  messagingSenderId: "105726125522",
  appId: "1:105726125522:web:8b74fac7d28a1e6384d40b",
  measurementId: "G-KHXG9JG0X4"
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(firebaseConfig);
  }
}
