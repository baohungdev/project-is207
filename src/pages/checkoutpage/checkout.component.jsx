import React from "react";
import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.name} cartItem={cartItem} />
      ))}
      <h1>${total}</h1>
      <div className="test-warning">
        *please use the following test credit card for payment
        <br />
        Numbers: 4242 4242 4242 4242 - Exp: any future day - CVV: any 3 digits
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

// const mapDispatchToProps =

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
