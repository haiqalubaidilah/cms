import { Component, OnInit } from "@angular/core";

import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import firebase from "firebase/app";
import { NavigationExtras, Router } from "@angular/router";
import { UserInfo } from "src/models/userInfo.model";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  uid: string;
  userInfo = {} as UserInfo;

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  //ionViewWillEnter — triggered when entering a page (also if it’s come back from stack/pages)
  //ngOnInit -  will not be triggered, if you come back to a page after putting it into a stack
  ngOnInit() {
    this.getInfo();
    // console.log("ngOnit executed!")
  }

  async getInfo() {
    //getting current user uid
    this.uid = (await this.afAuth.currentUser).uid;
    // console.log(this.uid);

    //getting current user's basic info
    this.firestore
      .doc("students/" + this.uid)
      .valueChanges()
      .subscribe((data) => {
        this.userInfo.nickname = data["nickname"];
        this.userInfo.lastLogin = data["lastLogin"];
        this.userInfo.uid = data["uid"];
        this.userInfo.session = data["session"];
        this.userInfo.subjectsVerified = data["subjectsVerified"];
        this.userInfo.sem = data["sem"];
        this.userInfo.courseCode = data["courseCode"];
      });
      // console.log(this.userInfo);
  }

  //navigate to the pages with current user data passed from this page
  navToPage(page: string) {
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.userInfo
      }
    }
    this.router.navigate([page], navigationExtras);
  }

  async logout() {
    let loader = await this.loadingCtrl.create({
      message: "Signing out...",
    });
    await loader.present();

    //update last login date
    await this.firestore.doc("students/" + this.uid).update({
      lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
    });

    //sign out of the current user
    await this.afAuth.signOut().then(() => {
      this.router.navigate(["login"]);
    });

    await loader.dismiss();
  }
}
