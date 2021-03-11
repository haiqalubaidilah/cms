import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.page.html",
  styleUrls: ["./notifications.page.scss"],
})
export class NotificationsPage implements OnInit {
  uid: string;
  notifications: any;

  constructor(
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.getNotifications();
  }

  async getNotifications() {
    this.uid = (await this.afAuth.currentUser).uid;

    //getting data from firestore
    try {
      this.firestore
        .collection("notifications", (ref) => ref.where("uid", "==", this.uid))
        .snapshotChanges()
        .subscribe((data) => {
          this.notifications = data.map((e) => {
            return {
              id: e.payload.doc.id,
              content: e.payload.doc.data()["content"],
              icon: e.payload.doc.data()["icon"],
            };
          });
          // console.log(this.notifications.length);
        });
    } catch (e) {
      console.log(e);
    }
  }

  async deleteNotification(id: string) {

    try {
      //delete the document by id
      await this.firestore.doc("notifications/" + id).delete();
    } catch (e) {
      console.log(e);
    }
  }
}
