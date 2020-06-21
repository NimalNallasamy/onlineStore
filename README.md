This project is done along with the tutor, in Angular App course in Udemy. 

Steps that are followed to build this project : 

1. Create a folder name Model.

2. Inside the Model, do these steps
    2.1 The first file created in this model is product.model.ts.
        2.1.1 Definig the product class, and initialize the values using constructor.
    2.2 The next file is static.datasource.ts 
        2.2.1 This class contains the data that's gonna be populated in the front end, for the user to see. 
        2.2.2 We made use of the injector decorator, observable, from to inject the details to the Repository class.
    2.3 The next file is product.repository.ts 
        2.3.1 This method uses the Service injected from data source.
        2.3.2 Also this method contains certain method that returns the data in some specific format to the front end. 
    2.4 The next file is model.module.ts
        2.4.1 This contains the NgModule decorator that provides the StaticDataStore and Repo.

3. We will build the model and then we will build the store.
    3.1 Build a new component - "store"
    3.2 Rename the selector - "store"
    3.3 Import ProductRepo
    3.4 Implement getAllProducts and getAllCategories
    3.5 Access Data Source through Repository.
    3.6 Construct the sample HTML to show the data.
    3.7 Create a new file store.module.ts - Import Browser Module, NgModule, StoreComponent. (This is for spliting the component into small components and building up the dependency on the app.module)
    3.8 Now we will be showing the data using Angular Pipe 

Introduction on Bootstrap by instructor.

1. Its all about grid system.
2. Divide our window into 12 cells.
3. Assign categories 3 cells.
4. Assign products 9 cells.