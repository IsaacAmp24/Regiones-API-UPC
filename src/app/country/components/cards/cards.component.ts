import {Component, OnInit} from '@angular/core';
import {CountryApiService} from "../../services/country-api.service";
import {DecimalPipe, NgForOf} from "@angular/common";
import {MatCard, MatCardAvatar, MatCardContent, MatCardHeader, MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    NgForOf,
    DecimalPipe,
    MatCardAvatar,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardModule
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit {

  public countries: any [] = [];

  constructor(private service: CountryApiService) {

  }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(){
    this.service.getCountries().subscribe((data:any) => {
      this.countries= data;
      }
    )
  }

}
