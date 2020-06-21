import { Component, OnInit } from '@angular/core';
import { ProductRepository } from './../../Model/product.repository';
import { Product } from 'src/Model/product.model';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public selectedCategory = null;
  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(private productRepo : ProductRepository) {

  }

  ngOnInit(): void {
  }

  get products() : Product[]{
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.productRepo.getAllProducts(this.selectedCategory).slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories() : string[]{
    return this.productRepo.getAllCategories();
  }

  changeCategory( newCategory? : string)  {
    this.selectedCategory = newCategory;
    this.selectedPage = 1;
  }

  getProductById(productId : number) : Product{
    return this.productRepo.getProductById(productId);
  }

  changePage(newPageIndex : number){
    this.selectedPage = newPageIndex;
  }

  changePageSize(newPageSize : number){
    this.productsPerPage = Number(newPageSize);
    // this.changeCategory();
  }

  get pageNumbers() : number[]{
    return Array(Math.ceil(this.productRepo
      .getAllProducts(this.selectedCategory).length / this.productsPerPage))
      .fill(0).map((x,i) => i+1);
  }

}
