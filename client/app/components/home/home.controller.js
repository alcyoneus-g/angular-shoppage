class HomeController {
  constructor($location, $uibModal, userService, pouchService) {
    this.loggedInUser = userService.getUser();
    this.userService  = userService;
    this.bootstrapModal = $uibModal;
    if ( !userService.isLoggedIn(this.loggedInUser) ) {
      $location.path("/login")
    } else {
      pouchService.fetchProducts();
    }
  }

  getProducts() {
    return this.userService.getProduct();
  }

  onDescription(product) {
    this.bootstrapModal.open({
      animation: true,
      templateUrl: "app/common/product/product.html",
      size: "md",
      controller: "productController",
      controllerAs: "vm",
      resolve: {
        info:  {
          isAdd: false,
          product
        }
      }
    });
  }

  onDelete(product) {
    this.bootstrapModal.open({
      animation: true,
      templateUrl: "app/common/confirmation/confirmation.html",
      size: "md",
      controller: "confirmationController",
      controllerAs: "vm",
      resolve: {
        product
      }
    })
  }
}

export default HomeController;
