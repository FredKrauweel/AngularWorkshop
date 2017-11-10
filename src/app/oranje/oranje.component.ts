import { Component, OnInit } from "@angular/core";
import {Http, Response} from '@angular/http';

@Component({
  selector: "app-oranje",
  templateUrl: "./oranje.component.html",
  styleUrls: ["./oranje.component.css"]
})

export class OranjeComponent implements OnInit {
  megamenu = {};

  constructor(private http: Http) {
    console.log(this);
    this.http.get("assets/megamenu_nl.json").subscribe(res => {
       const data = res.json();

       this.megamenu = data['megamenu']['items'];

       console.log(this.megamenu );
       //if (this.megamenu && this.megamenu.length > 0) this.setThis(this.megamenu[0]);
    });
  }

  ngOnInit() {  }

  subMenu(){
    console.log("SubmenuOfNie");
  }
}


