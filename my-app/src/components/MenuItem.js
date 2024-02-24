import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price, orderUpdate }) => {
    const imgPath = "images/" + imageName
    const [totalItems, setTotalItems] = useState(0)

    let addItem = ({}) => {
        setTotalItems(totalItems + 1)
        orderUpdate(price) 
    }

    let removeItem = ({}) => {
        if (totalItems != 0) {    
            setTotalItems(totalItems - 1)
            orderUpdate(-1 * price)    
        }
    }
    return (
        <div class="Container">
            <div class="card sm-12">
                <div class="row no-gutters">

                    <div class="col-4">
                        <img src={imgPath} class="card-img" alt={title} />
                    </div>

                    <div class="col-8">
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text">{description}</p>
                            <div class="row">
                                <div class="col-5">
                                    <p class="text-muted">${price}</p>
                                </div>
                                <div class="col-2">
                                    <button class="btn-secondary" onClick={() => addItem(price)}>+</button>
                                </div>
                                <div class="col-2" id="itemTotal">
                                    <p class="card-text text-center">{totalItems}</p>
                                </div>
                                <div class="col-1">
                                    <button class="btn-primary" onClick={() => removeItem(price)}> - </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
