import { Component, Input} from '@angular/core';
import { ProductsRequestService } from '../services/products-request.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input() id? : any;
  productsList !: Array<any> ;
  product : any={} ;

  constructor(private productData : ProductsRequestService){}
  
  ngOnInit(){
    this.productData.getProducts().subscribe((result : any) =>{
      this.productsList=result.products;
      console.log(this.productsList);
      this.product = this.productsList.find( product  => product.id == this.id)
      console.log(this.id);
      console.log(this.product);
    })
    
    
  }


}
