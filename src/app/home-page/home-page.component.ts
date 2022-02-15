import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { FoodItem } from '../food-item';
import { FavouriteFoods } from '../favourite-foods';
import { Router } from '@angular/router';
import { state } from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  favouriteFoods = FavouriteFoods;
  
  currentUser?: User;

  constructor(private router: Router) {  }

  ngOnInit(): void {
    // alert(history.state.data['name']);
    this.currentUser = history.state.data;
  }

  goToCart(): void{
    this.router.navigate( ["checkout"], {state: {data: this.currentUser}} );
  }
  showFiller = false;

  removeItem(item: FoodItem){
    if(item['qty']){
      if(item['qty']>0) item['qty'] = +item['qty'] - 1;
    }
  }

  addItem(item: FoodItem){
    if(item['qty']){
      item['qty'] = +item['qty'] + 1;
    }
    else item['qty'] = 1;
  }
}
