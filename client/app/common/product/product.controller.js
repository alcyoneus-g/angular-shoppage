class ProductController {
  constructor($uibModalInstance, pouchService, info) {
    this.pouchService = pouchService;
    this.modal = $uibModalInstance;
    this.isAdd = info.isAdd

    this.product = info.isAdd ? {"name": "", description: "", price: ""} : info.product;
  }

  addProduct() {
    const {name, description, price} = this.product;
    this.pouchService
        .addProduct(name, description, price)
        .then((response) => {
          this.pouchService.fetchProducts();
          this.modal.dismiss('cancel');
        }).catch(function(err) {
            console.log("Error ", err);
        });
  }

}

export default ProductController;
