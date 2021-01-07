class ConfirmationController {
  constructor(uibModalInstance, pouchService, product) {
    this.pouchService  = pouchService;
    this.product = product;
    this.bootstrapModal = uibModalInstance;
  }

  deleteProduct() {
    this.pouchService.deleteProduct(this.product)
      .then((result) => {
        this.pouchService.fetchProducts();
        this.bootstrapModal.dismiss('cancel');
    }).catch((err) => {
      console.log("error ", err);
    });
  }
  
}

export default ConfirmationController;
