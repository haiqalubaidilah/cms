import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-statement",
  templateUrl: "./statement.page.html",
  styleUrls: ["./statement.page.scss"],
})
export class StatementPage implements OnInit {
  statements = [
    {
      date: "17/06/19",
      ref: "I:KL05636",
      debit: "4460.00",
      credit: "",
      os: "4460.00",
    },
    {
      date: "02/08/19",
      ref: "B:070746",
      debit: "",
      credit: "1010.00",
      os: "3450.00",
    },
    {
      date: "23/09/19",
      ref: "I:KL07596",
      debit: "4290.00",
      credit: "",
      os: "7740.00",
    },
    {
      date: "29/09/19",
      ref: "B:472636",
      debit: "",
      credit: "490.00",
      os: "7250.00",
    },
    {
      date: "21/12/19",
      ref: "B:850716",
      debit: "",
      credit: "4000.00",
      os: "3250.00",
    },
    {
      date: "02/01/20",
      ref: "B:403947",
      debit: "",
      credit: "600.00",
      os: "7250.00",
    },
    {
      date: "10/01/20",
      ref: "I:KL04752",
      debit: "4490.00",
      credit: "",
      os: "7140.00",
    },
    {
      date: "10/01/20",
      ref: "B:846572",
      debit: "",
      credit: "250.00",
      os: "6890.00",
    },
    {
      date: "12/01/20",
      ref: "B:947365",
      debit: "",
      credit: "490.00",
      os: "6400.00",
    },
    {
      date: "30/04/20",
      ref: "P:JV053",
      debit: "",
      credit: "500.00",
      os: "5900.00",
    },
    {
      date: "15/06/20",
      ref: "B:948574",
      debit: "",
      credit: "540.00",
      os: "5360.00",
    },
    {
      date: "20/06/20",
      ref: "P:JV373",
      debit: "",
      credit: "4000.00",
      os: "1360.00",
    },
    {
      date: "26/07/20",
      ref: "I:KL98563",
      debit: "3440.00",
      credit: "",
      os: "4800.00",
    },
    {
      date: "25/09/20",
      ref: "P:JV125",
      debit: "",
      credit: "4000.00",
      os: "800.00",
    },
    {
      date: "10/11/20",
      ref: "B:948576",
      debit: "",
      credit: "190.00",
      os: "610.00",
    },
    {
      date: "04/12/20",
      ref: "I:KL99857",
      debit: "3390.00",
      credit: "",
      os: "4000.00",
    }
  ];

  constructor() {}

  ngOnInit() {}
}
