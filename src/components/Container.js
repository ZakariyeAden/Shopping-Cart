import React from 'react'
import CartIndicator from './Cartindicator'
import { Link } from 'react-router-dom'
function Container(props) {
  return (
    <div className="container">
      <header>
        <nav>
          <Link to="/">Naruto Shippuden</Link>
          <div className="nav-right">
            <Link to="/shop">Shop</Link>
            <Link to="/cart">
              <CartIndicator quantity={props.quantity}/>
            </Link>
          </div>
        </nav>
      </header>
      {props.children}
    </div>
  )
}

export default Container