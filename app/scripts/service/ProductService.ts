/// <reference path='../refs.ts'/>
'use strict';

module auction.service {

  import m = auction.model;

  // Could be an overkill in this small app, but in real large-scale apps can be
  // really handy.
  export interface IProductService {
    getFeatured(): ng.IPromise<m.ProductModel[]>;
    getById(id: number): ng.IPromise<m.ProductModel>;
    search(params?): ng.IPromise<m.ProductModel[]>;
  }

  // Actual implementation of IProductService.
  class ProductService implements IProductService {
    // Specified what dependencies Angular should inject into this service.
    // Constructor parameters must follow in the same order.
    static $inject = ['$http', '$log', 'Restangular'];

    private static ERROR_MSG_FEATURED =
      "Can't get static JSON file with the list of featured products." +
      "Please, ensure you are runnning application on a web server.";

    private static ERROR_MSG_SEARCH =
      "Can't get static JSON file with the list of found products." +
      "Please, ensure you are runnning application on a web server.";

    // Notice how we use TypeScript's ambient type declarations provided by
    // DefinitelyTyped library.
    constructor(private $http: ng.IHttpService,
                private $log: ng.ILogService,
                private restangular: restangular.IService) {}

    /**
     * Returns the list of featured products.
     * @returns List of featured products.
     */
    getFeatured(): ng.IPromise<m.ProductModel[]> {
      return this.$http.get('data/featured.json').then(
        (resp) => <m.ProductModel[]>resp.data.items,
        () => this.$log.error(ProductService.ERROR_MSG_FEATURED));
    }

    /**
     * Searches for products with specified criteria.
     * @returns List of found products.
     */
    search(params?): ng.IPromise<m.ProductModel[]> {
      return params ?
          this.restangular.all('products').getList(params) :
          this.$http.get('data/search.json').then(
              (resp) => <m.ProductModel[]>resp.data.items,
              () => this.$log.error(ProductService.ERROR_MSG_SEARCH));
    }

    /**
     * Returns a product if the product with specified ID exists, otherwise -
     * undefined.
     * @param id ID to find the product.
     * @returns Product with specified ID.
     */
    getById(id: number): ng.IPromise<m.ProductModel> {
      return this.search().then(products => _.find(products,
        (p: m.ProductModel) => p.id === id));
    }
  }

  // Register service in the Angular's DI container.
  angular.module('auction').service('ProductService', ProductService);
}
