import React, { useState } from 'react'
import './ProductBilling.css'

const ProductBilling = () => {

    const [billingInfo, setBillingInfo] = useState({
        firstName:'',
        lastName: '',
        country: '',
        streetAddress: '',
        townCity: '',
        state: '',
        pinCode: '',
        phone: "",
        emailAddress: '',
        additionInformation: '',
});

 const [shippingInfo, setShippingInfo] = useState({
    firstName:'',
    lastName: '',
    country: '',
    streetAddress: '',
    townCity: '',
    state: '',
    pinCode: '',
    phone: "",
    emailAddress: '',
    additionInformation: '',
 })

 const [paymentMethod, setPaymentMethod] = useState("");
   
     const handleBillingChange = (e) => {
        const { name , value} = e.target;
        setBillingInfo({...billingInfo, [name]: value});
     }

     const handleShippingChange = (e) => {
        const { name, value} = e.target;
        setShippingInfo({...shippingInfo, [name]: value});
     }

     const handlePaymentChange = (e) => {
        const { name, value} = e.target;
        setPaymentMethod(value);
     }

  return (
    <div className='checkout-container'>
      <div className='form-container'>
        <form>
            <label>
                First Name:
                <input
                type='text'
                name='firstName'
                value={billingInfo.firstName}
                onChange={handleBillingChange}
                />
            </label>
            <label>
                Last Name:
                <input
                type='text'
                name='LatName'
                value={billingInfo.lastName}
                onChange={handleBillingChange}
                />
            </label>
            <label>
                Country:
                <input
                type='text'
                name='LatName'
                value={billingInfo.country}
                onChange={handleBillingChange}
                />
            </label>
            <label>
                Street Address
                <input
                type='text'
                name='LatName'
                value={billingInfo.streetAddress}
                onChange={handleBillingChange}
                />
            </label>
            <label>
                Town City:
                <input
                type='text'
                name='LatName'
                value={billingInfo.townCity}
                onChange={handleBillingChange}
                />
            </label>
            <label>
                State:
                <input
                type='text'
                name='LatName'
                value={billingInfo.state}
                onChange={handleBillingChange}
                />
            </label>
            <label>
                pin Code:
                <input
                type='text'
                name='LatName'
                value={billingInfo.pinCode}
                onChange={handleBillingChange}
                />
            </label>
            <label>
                phone:
                <input
                type='text'
                name='LatName'
                value={billingInfo.phone}
                onChange={handleBillingChange}
                />
            </label>
            <label>
                Email Address:
                <input
                type='email'
                name='LatName'
                value={billingInfo.emailAddress}
                onChange={handleBillingChange}
                />
            </label>
            <label>
                Additional Information:
                <input
                type='text'
                name='LatName'
                value={billingInfo.additionInformation}
                onChange={handleBillingChange}
                />
            </label>
        </form>
      </div>

      <div className="product-details">
        <h2>Product Details</h2>
        <img src="p1.jpg" alt="Product" />
        <p>Product Name: Stretchable blue narrow bottom plus size jeans</p>
        <p>Subtotal: $2150.00</p>
        <p>Shipping: $10.00</p>
        <p>Total: $2160.00</p>
      </div>

      <div className="form-container">
        {/* Shipping Form */}
        <form>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={shippingInfo.firstName}
              onChange={handleShippingChange}
            />
          </label>
        </form>
        <form>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="creditCard"
              onChange={handlePaymentChange}
            />
            Credit Card
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="paypal"
              onChange={handlePaymentChange}
            />
            PayPal
          </label>
        </form>
        <button onClick={() => console.log('Place Order clicked')}>Place Order</button>
      </div>
    </div>
  )
}

export default ProductBilling
