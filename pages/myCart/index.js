import React from "react";
import MainLayout from "../../Layout/mainLayout";
import { Container } from "react-bootstrap";
import ShoppingCart from "../../components/wizard";
import CheckoutPage from "../../components/wizard2";


const MyCart = () => {
    return (
        <MainLayout>
            <Container>
                <div className="py-5">
                    <h1 className="text-center">My Cart</h1>
                </div>
                <div>
                    <ShoppingCart />
                    <CheckoutPage/>
                </div>
            </Container>
        </MainLayout>
    );
};

export default MyCart;
