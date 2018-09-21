import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})


export class SelectComponent implements OnInit {

  foods: Food[] = [
    { value: 'food-0', viewValue: 'Pizza' },
    { value: 'food-1', viewValue: 'Steak' },
    { value: 'food-2', viewValue: 'Fries' },
  ];
  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.foods.push({value: 'food', viewValue: 'Hamburgers'});
    console.log(`Items count ${this.foods.length}`);
  }

}

export interface Food {
  value: string;
  viewValue: string;
}
