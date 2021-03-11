import { Component, OnInit } from "@angular/core";

import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { ActivatedRoute } from "@angular/router";
import { NavController, ToastController } from "@ionic/angular";
import { LecturerEvaluation } from "src/models/lecturerEvaluation.model";
import { SubjectsInfo } from "src/models/subjectsInfo.model";

@Component({
  selector: "app-evaluation-lecturer",
  templateUrl: "./evaluation-lecturer.page.html",
  styleUrls: ["./evaluation-lecturer.page.scss"],
})
export class EvaluationLecturerPage implements OnInit {
  evaluate = {} as LecturerEvaluation;
  subjectsInfo = {} as SubjectsInfo;
  id: any;
  lecturerID: any;
  uid: any;

  constructor(
    private actRoute: ActivatedRoute,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {
    //extracting the document ID from the current route
    this.id = this.actRoute.snapshot.paramMap.get("id");
    this.lecturerID = this.actRoute.snapshot.paramMap.get("lecturerid");
  }

  ngOnInit() {
    this.getSubjectInfo();
    this.getEvaluation();
  }

  //getting the document by specified id
  async getSubjectInfo() {
    try {
      await this.firestore
        .doc("subjects/" + this.id)
        .valueChanges()
        .subscribe((data) => {
          this.subjectsInfo.code = data["code"];
          this.subjectsInfo.name = data["name"];
          this.subjectsInfo.lecturerName = data["lecturerName"];
          this.subjectsInfo.lecturerid = data["lecturerid"];
          this.subjectsInfo.creditHr = data["creditHr"];
          this.subjectsInfo.contactHr = data["contactHr"];
          // this.subjectsInfo.lecturerEvaluated = data["lecturerEvaluated"];
          this.subjectsInfo.section = data["section"];
        });
    } catch (e) {
      this.showToast(e);
    }
  }

  async getEvaluation() {
    this.uid = (await this.afAuth.currentUser).uid;
    try {
      await this.firestore
        .doc("lecturers/" + this.lecturerID + "/evaluations/" + this.uid)
        .valueChanges()
        .subscribe((data) => {
          this.evaluate.a1 = data["a1"];
          this.evaluate.a2 = data["a2"];
          this.evaluate.a3 = data["a3"];
          this.evaluate.a4 = data["a4"];
          this.evaluate.a5 = data["a5"];
          this.evaluate.b1 = data["b1"];
          this.evaluate.b2 = data["b2"];
          this.evaluate.b3 = data["b3"];
          this.evaluate.b4 = data["b4"];
          this.evaluate.b5 = data["b5"];
          this.evaluate.c1 = data["c1"];
          this.evaluate.c2 = data["c2"];
          this.evaluate.c3 = data["c3"];
          this.evaluate.c4 = data["c4"];
          this.evaluate.d1 = data["d1"];
          this.evaluate.d2 = data["d2"];
          this.evaluate.d3 = data["d3"];
          this.evaluate.additional = data["additional"];
          this.evaluate.isEvaluated = data["isEvaluated"];
        });
    } catch (e) {
      console.log(e);
    }
  }

  async createEvaluation(evaluation: LecturerEvaluation) {
    console.log(this.uid);

    if (this.formValidation()) {
      try {
        this.evaluate.isEvaluated = true;
        //adding new document
        await this.firestore
          .collection("lecturers/" + this.lecturerID + "/evaluations")
          .doc(this.uid)
          .update(evaluation);

        //update the user has completed the evaluation
        // await this.firestore
        // .doc("subjects/" + this.id)
        // .update({
        //   lecturerEvaluated: !this.subjectsInfo.lecturerEvaluated
        // });
        if (this.evaluate.isEvaluated) {
          this.showToast("Your evaluation has been submitted");
        }
      } catch (e) {
        this.showToast(e);
        console.log(e);
      }

      //redirect to L&C evaluation page
      this.navCtrl.navigateBack("/evaluation");
    }
  }

  formValidation() {
    if (!this.evaluate.a1) {
      this.showToast("Error: Question A.1");
      return false;
    }
    if (!this.evaluate.a2) {
      this.showToast("Error: Question A.2");
      return false;
    }
    if (!this.evaluate.a3) {
      this.showToast("Error: Question A.3");
      return false;
    }
    if (!this.evaluate.a4) {
      this.showToast("Error: Question A.4");
      return false;
    }
    if (!this.evaluate.a5) {
      this.showToast("Error: Question A.5");
      return false;
    }
    if (!this.evaluate.b1) {
      this.showToast("Error: Question B.1");
      return false;
    }
    if (!this.evaluate.b2) {
      this.showToast("Error: Question B.2");
      return false;
    }
    if (!this.evaluate.b3) {
      this.showToast("Error: Question B.3");
      return false;
    }
    if (!this.evaluate.b4) {
      this.showToast("Error: Question B.4");
      return false;
    }
    if (!this.evaluate.b5) {
      this.showToast("Error: Question B.5");
      return false;
    }
    if (!this.evaluate.c1) {
      this.showToast("Error: Question C.1");
      return false;
    }
    if (!this.evaluate.c2) {
      this.showToast("Error: Question C.2");
      return false;
    }
    if (!this.evaluate.c3) {
      this.showToast("Error: Question C.3");
      return false;
    }
    if (!this.evaluate.c4) {
      this.showToast("Error: Question C.4");
      return false;
    }
    if (!this.evaluate.d1) {
      this.showToast("Error: Question D.1");
      return false;
    }
    if (!this.evaluate.d2) {
      this.showToast("Error: Question D.2");
      return false;
    }
    if (!this.evaluate.d3) {
      this.showToast("Error: Question D.3");
      return false;
    }
    if (!this.evaluate.additional) {
      this.showToast("Error: Additional Remarks");
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
