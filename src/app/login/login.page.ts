import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "src/models/user.model";
import {
  LoadingController,
  NavController,
  ToastController,
} from "@ionic/angular";


@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  user = {} as User;
  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController,
  ) {}

  ngOnInit() {}

  
  async login(user: User) {
    if (this.formValidation()) {
      //show loader
      let loader = this.loadingCtrl.create({
        message: "Signing in...",
      });

      (await loader).present();

      try {
        await this.afAuth
          .signInWithEmailAndPassword(user.email, user.password)
          .then((data) => {
            console.log(data);
            
            //redirect to home page
            this.navCtrl.navigateRoot("tabs-page");
          });
      } catch (e) {
        this.showToast(e);
      }

      //dismiss loader
      (await loader).dismiss();
    }
  }

  formValidation() {
    if (!this.user.email) {
      this.showToast("Please enter your email");
      return false;
    }

    if (!this.user.password) {
      this.showToast("Please enter your password");
      return false;
    }

    return true;
  }

  showToast(message: string) {
    this.toastCtrl
      .create({
        message: message,
        duration: 3000,
      })
      .then((toastData) => toastData.present());
  }
}
