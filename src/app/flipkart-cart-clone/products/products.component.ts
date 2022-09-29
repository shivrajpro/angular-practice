import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList:any;
  searchKey: string = '';
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe((res)=>{
      this.productList=res;

      this.productList.forEach(p => {
        if(p.category == "men's clothing" || p.category == "women's clothing") 
          p.category = 'fashion';
      });

      console.log(">>  prod list",this.productList);
      
      this.api.search.subscribe((v)=>{
        this.searchKey = v;
      })
    });
  }

  filterProducts(category:string){

  }

}
