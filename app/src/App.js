import "./App.css";
import React from "react";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ListItem from "./Components/ListItem/ListItem";
import Basket from "./Components/Basket/Basket";

function App() {
  const [open, setOpen] = React.useState(false);
  const [items, setItems] = React.useState([
    {
      name: "Coke",
      price: 1.5,
      quantity: 0,
    },
    {
      name: "Muffin",
      price: 0.5,
      quantity: 0,
    },
    {
      name: "Bread",
      price: 1,
      quantity: 0,
    },
    {
      name: "Milk",
      price: 2.5,
      quantity: 0,
    },
    {
      name: "Eggs",
      price: 1.5,
      quantity: 0,
    },
  ]);

  const [basketTotal, setBasketTotal] = React.useState(0.0);

  React.useEffect(() => {
    setBasketTotal(calculateBasketTotal());
  });

  const calculateBasketTotal = () => {
    var total = 0;
    for (var item in items) {
      total += items[item].quantity * items[item].price;
    }

    return total;
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const buttonHandler = (itemAdded) => {
    var newItems = [...items];
    for (var item in newItems) {
      if (itemAdded.name == newItems[item].name) {
        var updatedItem = newItems[item];
        updatedItem.quantity++;
        newItems[item] = updatedItem;
        setItems(newItems);
      }
    }
  };

  const quantityChangeHandler = (itemChanged, quantity) => {
    var newItems = [...items];
    for (var item in newItems) {
      if (itemChanged.name == newItems[item].name) {
        var updatedItem = newItems[item];
        if (!isNaN(parseFloat(quantity))) {
          updatedItem.quantity = parseFloat(quantity);
        } else {
          updatedItem.quantity = 0;
        }

        newItems[item] = updatedItem;
        setItems(newItems);
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        Shop
        <ShoppingBasketIcon onClick={handleClickOpen}></ShoppingBasketIcon>
        <Basket
          open={open}
          onClose={handleClose}
          items={items}
          quantityChangeHandler={quantityChangeHandler}
          basketTotal={basketTotal}
        ></Basket>
      </header>
      {items.map((item) => (
        <ListItem
          key={item.name}
          item={item}
          buttonHandler={buttonHandler}
        ></ListItem>
      ))}
    </div>
  );
}

export default App;
