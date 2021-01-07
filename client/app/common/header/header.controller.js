class HeaderController {
  constructor($location, $uibModal, userService) {
    this.userService = userService;
    this.location = $location;
    this.bootstrapModal = $uibModal
  }

  addProduct() {
    this.bootstrapModal.open({
      animation: true,
      templateUrl: "app/common/product/product.html",
      size: "md",
      controller: "productController",
      controllerAs: "vm",
      resolve: {
        info: {
          isAdd: true,
          product: null
        }
      }
    });
  }

  logout() {
    this.userService.setUser(null)
    this.location.path("/login");
  }
}

export default HeaderController;
