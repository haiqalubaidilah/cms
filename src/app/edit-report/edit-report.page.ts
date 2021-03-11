import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from "@angular/fire/firestore";
import { ActivatedRoute } from "@angular/router";
import {
  LoadingController,
  NavController,
  ToastController,
} from "@ionic/angular";
import { Report } from "src/models/report.model";


@Component({
  selector: "app-edit-report",
  templateUrl: "./edit-report.page.html",
  styleUrls: ["./edit-report.page.scss"],
})
export class EditReportPage implements OnInit {
  report = {} as Report;
  id: any;

  constructor(
    private actRoute: ActivatedRoute,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private firestore: AngularFirestore
  ) {
    //extracting the document ID from the current route
    this.id = this.actRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.getReportById(this.id);
  }

  async getReportById(id: string) {
    //show loader
    let loader = this.loadingCtrl.create({
      message: "Please wait...",
    });
    (await loader).present();

    //getting the document by the specified id
    this.firestore
      .doc("reports/" + id)
      .valueChanges()
      .subscribe((data) => {
        this.report.email = data["email"];
        this.report.enquiry = data["enquiry"];
        this.report.description = data["description"];
      });
    //dismiss loader
    (await loader).dismiss();
  }

  async updateReport(report: Report) {
    if (this.formValidation()) {
      let isUpdated: boolean = false;

      //show loader
      let loader = this.loadingCtrl.create({
        message: "Please wait...",
      });
      (await loader).present();

      try {
        await this.firestore.doc("reports/" + this.id).update(report);
        isUpdated = true;
      } catch (e) {
        this.showToast(e);
      }

      //dismiss loader
      (await loader).dismiss();

      if (isUpdated) {
        this.showToast("Report has been updated");
      }

      //redirect to view post page
      this.navCtrl.navigateRoot("view-report");
    }
  }

  formValidation() {
    if (!this.report.email) {
      this.showToast("Enter email");
      return false;
    }

    if (!this.report.enquiry) {
      this.showToast("Enter equiry");
      return false;
    }

    if (!this.report.description) {
      this.showToast("Enter message");
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
