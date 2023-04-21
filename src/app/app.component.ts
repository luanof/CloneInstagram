import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'cloneInstagram';

  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: 'AIzaSyAE08RGfF8FbOrTLwGzmsw4ZKrcYgYQsVM',
      authDomain: 'clone-f9cab.firebaseapp.com',
      projectId: 'clone-f9cab',
      storageBucket: 'clone-f9cab.appspot.com',
      messagingSenderId: '937650740801',
      appId: '1:937650740801:web:cb321bb08f37d2742530c0',
      measurementId: 'G-ZMD2TKR9ZW',
    };
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);
    getAuth(app);
  }
}
