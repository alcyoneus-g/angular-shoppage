
function PouchService($rootScope, $location, userService) {
    "ngInject";
    var pouchDB = new PouchDB("inventory");
    initiatePouchDb();
    function initiatePouchDb() {
        pouchDB.bulkDocs([{
                _id: "account-newuser",
                username: "newuser",
                password: "123123"
            },
            {
                _id: "account-newuser1",
                username: "newuser1",
                password: "123123123"
            },
            {
                _id: "product-newuser-1609346376109",
                name: "Shoes",
                description: "Shoes could be used to wear while walking, sleeping & having fun.",
                price: "$50"
            },
            {
                _id: "product-newuser-1609346429686",
                name: "Shawl",
                description: "To protect yourself winter, use a warmer shawl. The word originates from India.",
                price: "$100"
            },
            {
                _id: "product-newuser1-1609346496076",
                name: "Paper",
                description: "Paper is the oldest form to spread the knowledge amongst generations. It's w_idely used in curriculum and government activities.",
                price: "$75"
            },
            {
                _id: "product-newuser1-1609346582025",
                name: "Scissor",
                description: "Scissor could be used to cut from hair to hand. It usuage totally depends on the person using it.",
                price: "$10"
            }]
        )
        .then(function(result) {

        }).catch(function(err) {
            console.log(err);
        });
    }

    function login(username, password) {
        pouchDB.allDocs({
          include_docs: true,
          key: `account-${username}`
        }).then(function (result){
          const { rows: [ { doc: user } ] } = result;
          if ( password === user.password ) {
            userService.setUser(user);
            $location.path("/home")
            $rootScope.$apply();
          } else {
            userService.setUser(null);
          }
        }).catch(function (err) {
          console.log(err);
        })
    }

    function fetchProducts() {
        const { username } = userService.getUser();
        pouchDB.allDocs({
            include_docs: true,
            startkey: `product-${username}-`,
            endkey: `product-${username}-\ufff0`
        }).then(function(result) {
            const { rows } = result;
            var products = [];
            rows.forEach( row => products.push(row.doc) );
            userService.setProduct(products);
            $rootScope.$apply();
        }).catch(function(err) {
            console.log("Error ", err);
        })
    }

    function addProduct(name, description, price) {
        const {username} = userService.getUser();
        return pouchDB.post({
            _id: `product-${username}-${Date.now()}`,
            name,
            description,
            price
        });
    }

    function deleteProduct(product) {
        return pouchDB.remove(product);
    }

    return {
        login,
        fetchProducts,
        addProduct,
        deleteProduct
    }
}

export default PouchService;
