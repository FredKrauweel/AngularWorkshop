import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groen',
  templateUrl: './groen.component.html',
  styleUrls: ['./groen.component.css']
})
export class GroenComponent implements OnInit {
showModal = false;
rate: string = '';
name: string = '';
email: string = ''; 

  constructor() {
   }

  ngOnInit() {
  }

  openModal(){
    this.rate = '';
    this.name = '';
    this.email = ''; 
    this.showModal = true;
  }
  closeModal(){
    this.showModal = false;
  }
  sendData(){
    console.log("rate: " + this.rate + "\nname: " + this.name + "\nemail: " + this.email);
    this.closeModal();
  }

}
