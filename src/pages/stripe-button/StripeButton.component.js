import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useHistory } from "react-router";
import { withRouter } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { addPackage } from "../../services/firebase.services";

const StripeButton = ({ price, plan }) => {
  const history = useHistory();
  const publishableKey =
    "pk_test_51J8rJ6SBWexFkajKSIroI0A9KFg5jLCCKyaO3apfU21zQkFmsuhN9Y4cZlnam0XMcRVbQVQE22ndqORdVY6z865t00J0X95AbN";

  const { currentUser } = useAuth();
  const onToken = async (token) => {
    console.log(token);
    await addPackage(currentUser?.docId, plan, price);
    alert("Payment successful");
    history.push("/");
  };

  return (
    <StripeCheckout
      label="Pay now"
      name={plan}
      billingAddress
      shippingAddress
      image="https://st2.depositphotos.com/1341440/7182/v/950/depositphotos_71824861-stock-illustration-chef-hat-vector-black-silhouette.jpg"
      description={`Your total is ${price}`}
      amount={price}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default withRouter(StripeButton);
