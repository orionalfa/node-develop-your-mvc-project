import React from "react";
import CartItem from "../CartItem";
// import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

// Cart total price (we will need to check props to adapt code)
// function getCartTotal(cart) {
//     return cart.reduce((accum, item) => {
//       return accum + item.price * item.quantity;
//     }, 0);
//   }

// Render Cart items (mockCartItems to test Cart)
// {handleRemove, handleChange}
function renderCartItems(){

  const mockCartItems = [];

  for(let i = 0; i < 5; i++) {
    mockCartItems.push(
      <CartItem 
        key={i}
        id={i}
        title={"product " + i}
        price={100}
        img={"../../img/mockProduct.jpg"}
        quantity={5}
        unitsInStock={3}
        // handleRemove={handleRemove}
        // handleChange={handleChange}
      />
    )
  }
  return mockCartItems;
}

// Render function 
function Cart({ cartItems, handleRemove, handleChange, open, ...props }){
  
    const [anchorEl, setAnchorEl] = React.useState(null);
    const mockCartItems = renderCartItems();

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleClose}
        >

          {/* <CartItem onClick={handleClose}>Profile</CartItem>
          <CartItem onClick={handleClose}>My account</CartItem> */}

          {mockCartItems}

        </Menu>

        // {cartItems.length > 0 ? (
        //   cartItems.map((item) => (
        //     <ShoppingCartItem
        //       key={item.id}
        //       id={item.id}
        //       title={item.title}
        //       price={item.price}
        //       img={item.img}
        //       quantity={item.quantity}
        //       unitsInStock={item.unitsInStock}
        //       handleRemove={handleRemove}
        //       handleChange={handleChange}
        //     />
        //   ))
        // ) : (
        //   <div className="col mb-4">
        //     <h4>Your cart is empty</h4>
        //   </div>
        // )}
      )
}

export default Cart;