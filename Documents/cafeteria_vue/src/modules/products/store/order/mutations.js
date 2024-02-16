// export const myMutations = (state) => {

// }

export const setItemOrderList = (state, products) => {

    try {         
        

        state.uID = products.uID
    
        state.isLoading = true

        const newProduct = {
            name: products.nombreProduct,
            id: products.productId,
            precio: products.productPrice,
            cantidad: products.productCantidad,
            categoria: products.productCategory
        };
        
        
        // Agregar el nuevo producto a state.order
        state.order.push(newProduct);

        // Convertir la lista de objetos a una cadena de texto JSON
        const productListJSON = JSON.stringify(state.order);

        // Guardar la cadena de texto en el localStorage
        localStorage.setItem('productList', productListJSON);
        
        state.isLoading = false //? Se marca que ya se termino de cargar la informacion            

    } catch(error) {
        console.log(error);
    }
    
}

export const setItemOrderListLocalStorage = (state, products) => {

    try {         
        

        state.isLoading = true
        

        state.uID = localStorage.getItem('uID')
        
        products.forEach(product => {
            // Agregar el nuevo producto a state.order
            state.order.push(product);    
        });

        

        // Convertir la lista de objetos a una cadena de texto JSON
        const productListJSON = JSON.stringify(state.order);

        // Guardar la cadena de texto en el localStorage
        localStorage.setItem('productList', productListJSON);
        
        state.isLoading = false //? Se marca que ya se termino de cargar la informacion            

    } catch(error) {
        console.log(error);
    }
    
}