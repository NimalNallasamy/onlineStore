import { Injectable } from "@angular/core";
import { Product } from './product.model';
import { Observable, from } from 'rxjs';

@Injectable()
export class StaticDataSource{
    
    private products : Product[] = [
        new Product(1, "One Plus 5", "Mobile", 28000, "Some description"),
        new Product(2, "Samsung Galaxy Note 9", "Mobile", 100000, "One of the costliest phones"),
        new Product(3, "One Plus 5T", "Mobile", 29000 ,"A phone which redifines gaming"),
        new Product(4, "One Plus 6", "Mobile", 32000 , "The dash charging that we have introduced will steal the show!"),
        new Product(5, "One Plus 6T", "Mobile", 37000, "The phone which makes you fall for it"),
        new Product(6, "One Plus 7", "Mobile", 42000, "The latest model of One Plus Series"),
        new Product(7, "HP Envy 15t", "Laptop", 57000, "One that stand for office and professional use"),
        new Product(8, "HP Envy 17t", "Laptop", 67000, "15t now bigger and better"),
        new Product(9, "Lenovo Chromistar", "Laptop", 25000, "The one which can take care of your personal laptop needs"),
        new Product(10, "Dell Invengine 15", "Laptop", 45000, "Go Dell, go professional"),
        new Product(12, "Asus Delta Star", "Laptop", 30000, "Performance not compromised"),
        new Product(13, "Dell Alienware", "Laptop", 120000, "A gaming world in which you get lost"),
        new Product(14, "HP Omen Tetrastar", "Laptop", 72000, "Become a professional gamer by spending less"),
        new Product(15, "Xiomi Band3", "SmartWatches", 2500, "A simple tracker device"),
        new Product(16, "Fitbit Band X", "SmartWatches", 12000, "Tracker which tracked your heart beat, motion and so on."),
        new Product(17, "Apple I Watch", "SmartWatches", 25000, "Save your life with this watch when in danger"),
        new Product(18, "Nike Mercurial", "SportsShoe", 7000, "The one that even Critsiano himself trusts of"),
        new Product(19, "Parker Ink", "Pens", 500, "Extra marks for good hand writing"),
    ];

    public getProductDetails () : Observable<Product[]> {
        return from([this.products]);
    }
}