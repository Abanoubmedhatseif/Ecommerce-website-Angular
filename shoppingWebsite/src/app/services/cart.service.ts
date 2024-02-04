import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private shoppingList = new BehaviorSubject<any[]>([]);

  constructor() {}

  getList() {
    return this.shoppingList.asObservable();
  }

  updateList(item: any) {
    const currentList = this.shoppingList.value;
    const existingItemIndex = currentList.findIndex(i => i.id === item.id);

    if (existingItemIndex > -1) {
      currentList[existingItemIndex].quantity += 1;
    } else {
      currentList.push({...item, quantity: 1});
    }

    this.shoppingList.next(currentList);
  }

  IncreaseQuantity(item : any){
    const currentItem = this.shoppingList.value.find(i => i.id === item.id);
    currentItem.quantity += 1;
    console.log(currentItem.quantity);
  }

  DecreaseQuantity(item : any){
    const currentItem = this.shoppingList.value.find(i => i.id === item.id);
    currentItem.quantity -= 1;
    console.log(currentItem.quantity);
  }

  RemoveFromShoppingList(item : any){
    const newList = this.shoppingList.value.filter(i => i.id !== item.id);
    this.shoppingList.next(newList);
  }


}
