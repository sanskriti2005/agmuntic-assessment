// import React from "react";
// import { useSelector } from "react-redux";
// import { Box, Button, Flex, VStack } from "@chakra-ui/react";

// const PaymentPage = () => {
//   const { cart } = useSelector((state) => state.product);
//   const totalPrice = cart.reduce((acc, product) => acc + product.price, 0) * 81;

//   const loadRazorpayScript = () => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   const handlePayment = async () => {
//     const isLoaded = await loadRazorpayScript();

//     if (!isLoaded) {
//       alert("Failed to load Razorpay. Please try again.");
//       return;
//     }

//     const options = {
//       key: "rzp_test_k1zMqvZ8UIgOnX",
//       amount: totalPrice,
//       currency: "INR",
//       name: "Products",
//       description: "Purchase Checkout",
//       handler: function (response) {
//         alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
//       },
//       prefill: {
//         name: "Sanskriti",
//         email: "sanskriti@example.com",
//         contact: "9999999999",
//       },
//       theme: {
//         color: "#3399cc",
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   return (
//     <VStack alignItems={'center'} justifyContent={'center'}>
//       <h2>Complete Your Payment of ₹{totalPrice.toFixed(2)}</h2>
//       <Button onClick={handlePayment}>Pay with Razorpay</Button>
//     </VStack>
//   );
// };

// export default PaymentPage;

import React from 'react'

const PaymentPage = () => {
  return (
    <div>PaymentPage</div>
  )
}

export default PaymentPage
