import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class ProductRepository{

    private products : Product[] = [];
    private categories : string[] = [];

    constructor(private datasource : StaticDataSource){

        // Subscribe method 
        datasource.getProductDetails().subscribe(productData => {
            this.products = productData;
            this.categories = productData.map( category => category.category)
            .filter((value, index, array) => array.indexOf(value) == index).sort(); 
        });

    }

    // Get Products
    getAllProducts(category : string = null) : Product[]{
        return this.products.filter(filterCategory => category == null || filterCategory.category == category);
    }

    // Get Products By Id
    getProductById(id : number) : Product{
        return this.products.find(product => product.productId = id);
    }

    // Get all categories
    getAllCategories() : string[] {
        return this.categories;
    }

}