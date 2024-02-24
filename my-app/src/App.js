import { useState } from 'react';
import './App.css';
import MenuItem from './components/MenuItem';
import Button from 'react-bootstrap/Button';
import { clear } from '@testing-library/user-event/dist/clear';
// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the class attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];


function App() {
  const [orderTotal, setOrderTotal] = useState(0)

  let numberOfItems = 0

  var addToOrder = (price) => {
    let newTotal = orderTotal
    if (orderTotal + price >= 0){
      newTotal = orderTotal + price
    }
    setOrderTotal( Math.round((newTotal) * 100)/100)
  }


  var clearOrder = () => {setOrderTotal(0)}
  var orderPlaced = () => {alert("Order placed for" + numberOfItems +"items and " + orderTotal)}
  return (
    <div>
      <div class="row" id="header">
        <div class="col-3 offset-2">
          <img src="./images/ut-logo.png" class="img-fluid" alt="UT Dining logo" />
        </div>
        <div class="col-7 text-left my-auto">
          <h1 class="display-4">CAMPUS CAFE</h1>

        </div>
      </div>

      <h2 class="mb-4 text-center" id="subheader">
        Delicious, From-Scratch Recipes Close at Hand
        <br />
        <small>The Fresh Choice of UT!</small>
      </h2>


      <div class="menu">
        {menuItems.map((item) => (
          <MenuItem title={item.title} description={item.description} imageName={item.imageName} price={item.price} orderUpdate={addToOrder} />
        ))}
      </div>


      <div class="order-container">
        <div class="row">
          <div class="col-4">
            <p> Subtotal: ${orderTotal}</p>
          </div>

          <div class="col-4">
            <button class="btn btn-dark" onClick={() => orderPlaced}>Place Order</button>
          </div>

          <div class="col-4">
            <button class="btn btn-secondary" onClick={() => clearOrder}>Clear</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
