import { Component } from '@angular/core';
import { ProductsRequestService } from '../services/products-request.service';
import { RouterLink } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink,NgbModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  productsList !: Array<any> ;
  shoppingList !: Array<any>;
  constructor(private productData : ProductsRequestService , private cartservice : CartService){}

  ngOnInit(){
    this.productData.getProducts().subscribe((result : any) =>{
      this.productsList=result.products
      console.log(this.productsList);
      console.log(result.products);

      this.cartservice.getList().subscribe((value) => this.shoppingList = value);
    })
  }

  handleAddToCart(product : any){
    this.cartservice.updateList(product);
    console.log(this.shoppingList);
    this.shoppingList.forEach(item => {
      console.log(`Item: ${item.title}, Quantity: ${item.quantity}`);
      })
  }

  
  
  
  
  
}
