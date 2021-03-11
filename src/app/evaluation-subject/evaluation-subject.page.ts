import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { ActivatedRoute } from "@angular/router";
import { NavController, ToastController } from "@ionic/angular";
import { SubjectsInfo } from "src/models/subjectsInfo.model";
import { SubjectEvaluation } from "src/models/subjectEvaluation.model";

@Component({
  selector: "app-evaluation-subject",
  templateUrl: "./evaluation-subject.page.html",
  styleUrls: ["./evaluation-subject.page.scss"],
})
export class EvaluationSubjectPage implements OnInit {
  evaluate = {} as SubjectEvaluation;
  subjectsInfo = {} as SubjectsInfo;
  id: any;
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
  }

  ngOnInit() {
    this.getSubjectInfo();
    this.getEvaluation();
  }

  //getting the document by specified id
  async getSubjectInfo() {
    try {
      this.firestore
        .doc("subjects/" + this.id)
        .valueChanges()
        .subscribe((data) => {
          this.subjectsInfo.code = data["code"];
          this.subjectsInfo.name = data["name"];
          this.subjectsInfo.lecturerName = data["lecturerName"];
          // this.subjectsInfo.lecturerid = data["lecturerid"];
          this.subjectsInfo.creditHr = data["creditHr"];
          this.subjectsInfo.contactHr = data["contactHr"];
          // this.subjectsInfo.isEvaluated = data["isEvaluated"];
          this.subjectsInfo.section = data["section"];
        });
    } catch (e) {
      this.showToast(e);
    }
  }

  async getEvaluation() {
    this.uid = (await this.afAuth.currentUser).uid;
    // console.log(this.id + "   " + this.uid)

    try {
      await this.firestore
        .doc("subjects/" + this.id + "/evaluations/" + this.uid)
        .valueChanges()
        .subscribe((data) => {
          this.evaluate.a1 = data["a1"];
          this.evaluate.a2 = data["a2"];
          this.evaluate.a3 = data["a3"];
          this.evaluate.a4 = data["a4"];
          this.evaluate.b1 = data["b1"];
          this.evaluate.b2 = data["b2"];
          this.evaluate.b3 = data["b3"];
          this.evaluate.b4 = data["b4"];
          this.evaluate.b5 = data["b5"];
          this.evaluate.c1 = data["c1"];
          this.evaluate.c2 = data["c2"];
          this.evaluate.c3 = data["c3"];
          this.evaluate.c4 = data["c4"];
          this.evaluate.c5 = data["c5"];
          this.evaluate.c6 = data["c6"];
          this.evaluate.d1 = data["d1"];
          this.evaluate.d2 = data["d2"];
          this.evaluate.d3 = data["d3"];
          this.evaluate.d4 = data["d4"];
          this.evaluate.d5 = data["d5"];
          this.evaluate.d6 = data["d6"];
          this.evaluate.e1 = data["e1"];
          this.evaluate.e2 = data["e2"];
          this.evaluate.e3 = data["e3"];
          this.evaluate.e4 = data["e4"];
          this.evaluate.e5 = data["e5"];
          this.evaluate.f1 = data["f1"];
          this.evaluate.f2 = data["f2"];
          this.evaluate.f3 = data["f3"];
          this.evaluate.f4 = data["f4"];
          this.evaluate.f5 = data["f5"];
          this.evaluate.f6 = data["f6"];
          this.evaluate.f7 = data["f7"];
          this.evaluate.f8 = data["f8"];
          this.evaluate.f9 = data["f9"];
          this.evaluate.g1 = data["g1"];
          this.evaluate.g2 = data["g2"];
          this.evaluate.g3 = data["g3"];
          this.evaluate.g4 = data["g4"];
          this.evaluate.g5 = data["g5"];
          this.evaluate.g6 = data["g6"];
          this.evaluate.additional = data["additional"];
          this.evaluate.isEvaluated = data["isEvaluated"];
        });
    } catch (e) {
      console.log(e);
    }
  }

  //create evaluation document
  async createEvaluation(evaluation: SubjectEvaluation) {
    if (this.formValidation()) {
      try {
        this.evaluate.isEvaluated = true;
        //adding new document
        await this.firestore
          .collection("subjects/" + this.id + "/evaluations")
          .doc(this.uid)
          .set(evaluation);
  
        //update the user has completed the evaluation
        // await this.firestore.doc("subjects/" + this.id).update({
        //   isEvaluated: !this.subjectsInfo.isEvaluated,
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
    if (!this.evaluate.c5) {
      this.showToast("Error: Question C.5c5");
      return false;
    }
    if (!this.evaluate.c6) {
      this.showToast("Error: Question C.6");
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
    if (!this.evaluate.d4) {
      this.showToast("Error: Question D.4");
      return false;
    }
    if (!this.evaluate.d5) {
      this.showToast("Error: Question D.5");
      return false;
    }
    if (!this.evaluate.d6) {
      this.showToast("Error: Question D.6");
      return false;
    }
    if (!this.evaluate.e1) {
      this.showToast("Error: Question E.1");
      return false;
    }
    if (!this.evaluate.e2) {
      this.showToast("Error: Question E.2");
      return false;
    }
    if (!this.evaluate.e3) {
      this.showToast("Error: Question E.3");
      return false;
    }
    if (!this.evaluate.e4) {
      this.showToast("Error: Question E.4");
      return false;
    }
    if (!this.evaluate.e5) {
      this.showToast("Error: Question E.5");
      return false;
    }
    if (!this.evaluate.f1) { //
      this.showToast("Error: Question F.1");
      return false;
    }
    if (!this.evaluate.f2) {
      this.showToast("Error: Question F.2");
      return false;
    }
    if (!this.evaluate.f3) {
      this.showToast("Error: Question F.3");
      return false;
    }
    if (!this.evaluate.f4) {
      this.showToast("Error: Question F.4");
      return false;
    }
    if (!this.evaluate.f5) {
      this.showToast("Error: Question F.5");
      return false;
    }
    if (!this.evaluate.f6) {
      this.showToast("Error: Question F.6");
      return false;
    }
    if (!this.evaluate.f7) {
      this.showToast("Error: Question F.7");
      return false;
    }
    if (!this.evaluate.f8) {
      this.showToast("Error: Question F.8");
      return false;
    }
    if (!this.evaluate.f9) {
      this.showToast("Error: Question F.9");
      return false;
    }
    if (!this.evaluate.g1) {
      this.showToast("Error: Question G.1");
      return false;
    }
    if (!this.evaluate.g2) {
      this.showToast("Error: Question G.2");
      return false;
    }
    if (!this.evaluate.g3) {
      this.showToast("Error: Question G.3");
      return false;
    }
    if (!this.evaluate.g4) {
      this.showToast("Error: Question G.4");
      return false;
    }
    if (!this.evaluate.g5) {
      this.showToast("Error: Question G.5");
      return false;
    }
    if (!this.evaluate.g6) {
      this.showToast("Error: Question G.6");
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
