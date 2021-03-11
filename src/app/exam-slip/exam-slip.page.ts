import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-exam-slip",
  templateUrl: "./exam-slip.page.html",
  styleUrls: ["./exam-slip.page.scss"],
})
export class ExamSlipPage implements OnInit {
  sem: string;
  url: any;
  constructor() {}

  ngOnInit() {}

  changeURL() {
    if (this.sem == "5") {
      this.url =
        "https://drive.google.com/uc?export=download&id=1YasnT6WtVhlR4ghHtrnbfH9u_3fM6XwA";
    }
  }
}
