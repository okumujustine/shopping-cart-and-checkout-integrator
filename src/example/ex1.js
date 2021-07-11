import React from "react";
import { CartValueWithLogo, CartButton, CartListing } from "./components/index"

function App() {


    const products = [
        { id: 1, name: 'yogurt', price: 6000, description: "amazing product for cooking faster" },
        { id: 2, name: 'milk', price: 12000, description: "amazing product for cooking faster" },
    ]

    const continueToCheckout = (checkoutDetails) => {
        console.log('continueToCheckout', checkoutDetails)
    }

    return (
        <div style={{ marginLeft: "50px", marginTop: "100px", paddingTop: "20px", paddingBottom: "30px" }}>
            <div>
                <CartValueWithLogo />
            </div>
            <div style={{ display: "flex" }}>
                <div>
                    {products.map((product, index) => <React.Fragment key={index}><div style={{ width: "200px", marginBottom: "10px" }}>
                        <h5>{product.name}</h5>
                        <p>{product.price}</p>
                        <CartButton
                            product={{
                                name: product.name,
                                id: product.id,
                                price: product.price,
                                description: product.description,
                                quantity: 1
                            }}
                        />
                    </div><hr /></React.Fragment>)}
                </div>

                <div style={{ marginLeft: "50px", width: "70%", padding: "7px 10px", border: "1px solid gray" }}>
                    <CartListing continueToCheckout={continueToCheckout} currencySign="$" />
                </div>
            </div>
        </div>
    );
}

export default App;
