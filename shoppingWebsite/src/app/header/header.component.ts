import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  shoppingList !: Array<any>;
  cartItemsNumber : number =0;
  constructor(private cartservice : CartService){}

  ngOnInit(){
      this.cartservice.getList().subscribe((value) => this.cartItemsNumber = value.length);
      console.log(this.cartItemsNumber);
  }






}
