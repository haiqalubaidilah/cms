import { Component, OnInit } from '@angular/core';

import { LoadingController, ToastController } from "@ionic/angular";

import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-news",
  templateUrl: "./news.page.html",
  styleUrls: ["./news.page.scss"],
})
export class NewsPage implements OnInit {
  news: any;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore
  ) {}

  ngOnInit() {
    this.getNews();
  }

  async getNews() {
    let loader = await this.loadingCtrl.create({
      message: "Please wait...",
    });
    loader.present();

    //getting data from firestore
    try {
      this.firestore
        .collection("news")
        .snapshotChanges()
        .subscribe((data) => {
          this.news = data.map((e) => {
            return {
              id: e.payload.doc.id,
              title: e.payload.doc.data()["title"],
              sub: e.payload.doc.data()["sub"],
              content: e.payload.doc.data()["content"],
              img: e.payload.doc.data()["img"],
              addLink: e.payload.doc.data()["addLink"],
            };
          });
          loader.dismiss();
        });
    } catch (e) {
      this.showToast(e);
    }
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
