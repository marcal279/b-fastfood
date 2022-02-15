import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from '../user';
import { FoodItem } from '../food-item';
import { FavouriteFoods } from '../favourite-foods';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  nameFormControl = new FormControl('', [Validators.required]);
  // secondFormGroup: FormGroup;
  cartItems = FavouriteFoods;

  currentUser?: User;
  
  addressLabels : string[] = [];
  addressValues : string[] = [];

  label: string = "";
  getAddrLabels(): void{
    if(this.currentUser){
      this.addressLabels = Object.keys(this.currentUser['address']);
      this.addressValues = Object.values(this.currentUser['address']);
      console.log(this.addressLabels, this.addressValues, this.addressValues[this.addressLabels.indexOf(this.addressSelected)]);
    }
  }
  addressSelected = 'Home'; // default

  constructor() { }

  ngOnInit(): void {
    this.currentUser = history.state.data;
    this.getAddrLabels();
    this.getFoodPrice();
    this.getTaxAmount();
  }

  isThereUser(): void{
    if(this.currentUser) alert(`User is there, ${this.currentUser['name']}`);
    else alert('No User');
  }

  getSelectedAddr(): string{
    if(this.currentUser){
      return this.addressValues[this.addressLabels.indexOf(this.addressSelected)];
    }
    return 'Not Found';
  }

  foodPrice: number = 0;
  getFoodPrice(): void{
    for(let item of this.cartItems){
      if(item['qty']) this.foodPrice = (+item['price'] * +item['qty']) + this.foodPrice ;
    }
  }

  removeItem(item: FoodItem){
    if(item['qty']){
      if(item['qty']>0){
        item['qty'] = +item['qty'] - 1;
        this.foodPrice = this.foodPrice - +item['price']; 
      }
    }
  }

  addItem(item: FoodItem){
    if(item['qty']){
      item['qty'] = +item['qty'] + 1;
    }
    else item['qty'] = 1;
    this.foodPrice = this.foodPrice + +item['price']; 
  }

  taxRate = 12.5;
  taxAmount = 0;
  totalPrice: number = this.foodPrice;

  getTaxAmount(){
    if(this.foodPrice) this.taxAmount = this.taxRate*this.foodPrice/100;
    this.totalPrice = this.foodPrice + this.taxAmount
  }


}
