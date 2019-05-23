import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stark',
  templateUrl: './stark.component.html',
  styleUrls: ['./stark.component.css']
})
export class StarkComponent implements OnInit {

  house: string;
  info: string;
  http: HttpClient;

  constructor() { 
	this.house = "Lorem Ipsum";
    this.loadFamilyInformation();
  }

  // Later, we'll query a database, using the family name.
  loadFamilyInformation(){

  }

  ngOnInit() {
  }

}
