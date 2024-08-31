//#HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.


fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(res => {
        let {carts} = res;
        for (const cart of carts) {
            console.log(cart);
            let {
                id,
                products,
                total,
                discountedTotal,
                userId,
                totalProducts,
                totalQuantity
            } = cart

            let div = document.createElement('div')

            let idCart = document.createElement('h1');
            idCart.innerText = 'Cart Id: ' + id;

            let idUser = document.createElement('h3');
            idUser.innerText = 'User id: ' + userId;

            let totalQuantityCart = document.createElement('p');
            totalQuantityCart.innerText = 'Total Quantity: ' + totalQuantity;

            let totalProductsCart = document.createElement('p');
            totalProductsCart.innerText = 'Total Products: ' + totalProducts;

            let list = document.createElement('ul');

            for (const item of products) {
                let {
                    id,
                    title,
                    thumbnail,
                    total,
                    price,
                    quantity,
                    discountPercentage,
                    discountedTotal
                } = item;

                let img = document.createElement('img')
                img.src = thumbnail;

                let blockText = document.createElement('div')
                blockText.classList.add('cartBlockText')

                let product = document.createElement('li');
                product.innerText = title + '  id: ' + id;

                let quantityOfProducts = document.createElement('li');
                quantityOfProducts.innerText = 'Quantity: ' + quantity + ' piece(s)'

                let priceOfProduct = document.createElement('li');
                priceOfProduct.innerText = 'Price: ' + price + '$';

                let discountOfProduct = document.createElement('li');
                discountOfProduct.innerText = 'Discount: ' + discountPercentage + '%'

                let totalDiscountedOfProduct = document.createElement('li');
                totalDiscountedOfProduct.innerText = 'Total Discount: ' + discountedTotal + '$'

                let totalPriceOfProduct = document.createElement('li')
                totalPriceOfProduct.innerText = 'Total Price of the product: ' + total + '$'

                blockText.append(product, quantityOfProducts, priceOfProduct, discountOfProduct, totalDiscountedOfProduct, totalPriceOfProduct)

                list.append(img, blockText);
            }
            let blockTotalGeneral = document.createElement('div');
            blockTotalGeneral.classList.add('totalGeneralBlock');

            let divTotal = document.createElement('div');
            divTotal.classList.add('totalBlock');

            let discountTotalCart = document.createElement('p');

            discountTotalCart.innerText = 'Total Discount: ' + discountedTotal + '$'

            let totalSumCart = document.createElement('p');
            totalSumCart.innerText = 'Total Sum: ' + total + '$'

            blockTotalGeneral.append(divTotal)

            divTotal.append(discountTotalCart, totalSumCart)

            let hr = document.createElement('hr')

            div.append(idCart, idUser, totalQuantityCart, totalProductsCart, list, blockTotalGeneral, hr)

            document.body.append(div)
        }
    });
