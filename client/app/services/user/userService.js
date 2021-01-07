function UserService() {
    "ngInject";
    var model = {user: null, allProduct: []};

    function isLoggedIn(user) {
        return user && Object.keys(user).length > 0;
    }

    function getProduct() {
        return model.allProduct;
    }

    function setProduct(products) {
        model.allProduct = products;
    }

    function getUser() {
        return model.user;
    }

    function setUser(user) {
        model.user = user;
    }

    return {
        getUser,
        setUser,
        getProduct,
        setProduct,
        isLoggedIn
    }
}
  
export default UserService;
