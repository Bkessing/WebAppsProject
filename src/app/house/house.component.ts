import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

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
