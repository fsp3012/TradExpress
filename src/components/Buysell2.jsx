import React from 'react'
import '../styles/Buysell.css'

const Buysell2 = () => {
  return (
    <div className="buy">
    <form className=" mb-5 p-5">
      <div>
        <h6 className="text-start coin">Coin to Sell==</h6>
        <select className="w-100 pe-2 ps-2 rounded-2">
          <option value="">Bitcoin</option>
          <option value="">USDT</option>
          <option value="">Etherium</option>
        </select>
        <h6 className="text-start coin">Currency</h6>
        <select className="w-100 pe-2 ps-2 rounded-2">
          <option value="">Naira(NGN)</option>
          <option value="">Dollar(USD)</option>
          <option value="">Pound(GBP)</option>
        </select>
      </div>
      <div className="text-start btns">
        <h6>Amount</h6>
        <div className="d-flex">
          <input type="text" placeholder="NGN" className="btnn bg-white" />
          <input type="text" placeholder="3,000,000" className="btnn2 border-0 bg-white" />
        </div>
      </div>
      <button className="bg-purple w-100 border-0 mt-5 text-white rounded-2 btnnn">
        Continue
      </button>
    </form>
  </div>
  )
}

export default Buysell2