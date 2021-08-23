import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import CancelIcon from "@material-ui/icons/Cancel";
import PropTypes from "prop-types";
import React from "react";
import { Button } from "@material-ui/core";
import "./Basket.css";

export default function Basket(props) {
  const { onClose, selectedValue, open } = props;
  const [itemsCopy, setItemsCopy] = React.useState([...props.items]);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const clearButtonHandler = () => {
    props.items.forEach((item) => {
      props.quantityChangeHandler(item, 0);
    });
  };

  React.useEffect(() => {
    for (var itemCopy in itemsCopy) {
      itemsCopy[itemCopy].inBasket = itemsCopy[itemCopy].quantity > 0;
    }
  });

  const inputChangeHandler = (item, event) => {
    props.quantityChangeHandler(item, event.target.value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle id="simple-dialog-title">Basket</DialogTitle>
      <div className="modal">
        {itemsCopy
          .filter((item) => item.quantity > 0)
          .map((item) => (
            <div className="item" key={item.name}>
              <span className="itemComponent">{item.name}</span>

              <TextField
                className={"quantityBox"}
                value={item.quantity}
                onChange={(event) => inputChangeHandler(item, event)}
              ></TextField>
              <span className="itemComponent">
                {/* {setBasketTotal(basketTotal + item.price * item.quantity)}£ */}
                £{(item.price * item.quantity).toFixed(2)}
              </span>
              <CancelIcon
                onClick={() => props.quantityChangeHandler(item, 0)}
              ></CancelIcon>
            </div>
          ))}
        £{props.basketTotal.toFixed(2)}
        <Button onClick={clearButtonHandler}>Clear</Button>
      </div>
    </Dialog>
  );
}

Basket.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
};
