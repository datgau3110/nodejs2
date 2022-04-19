import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Payment_style.css'

function Payment() {
  return (
    <div>
        <div class="container mt-4 d-flex justify-content-center main">
        <div class="card">
            <div class="d-flex justify-content-between px-3 pt-4">
                <span class="pay">Payment</span>
                <div class="amount">
                    <div class="inner">
                        <span class="dollar">$</span>
                        <span class="total">999</span>
                    </div>
                </div>
            </div>

            <div class="px-3 pt-3">
                <label for="card number" class="d-flex justify-content-between">
                    <span class="labeltxt">CARD NUMBER</span>
                    <img src={require('./mastercard.jpeg')} alt="" width="30" class="image" />
                </label>
                <input type="number" name="number" class="form-control inputtxt" placeholder="1234 5678 6789 6789"/>
            </div>

            <div class="d-flex justify-content-between px-3 pt-4">
                <div>
                    <label for="date" class="exptxt">Expiry</label>
                    <input type="number" name="number" class="form-control expiry" placeholder="MM /YY"/>
                </div>
                <div>
                    <label for="cvv" class="cvvtxt">CVV /CVC</label>
                    <input type="number" name="number" class="form-control cvv" placeholder="123"/>
                </div>
            </div>

            <div class="d-flex align-items-center justify-container-between px-3 py-4">
                <div>
                    <button type="button" class="btn cancel">Cancel</button>
                </div>
                <div>
                    <button type="button" class="btn payment">Make Payment</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Payment