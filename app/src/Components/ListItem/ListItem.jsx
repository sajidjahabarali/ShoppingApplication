import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ListItem.css";
import { Button } from "@material-ui/core";
class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  // componentWillMount() {}

  // componentDidMount() {}

  // componentWillReceiveProps(nextProps) {}

  // shouldComponentUpdate(nextProps, nextState) {}

  // componentWillUpdate(nextProps, nextState) {}

  // componentDidUpdate(prevProps, prevState) {}

  // componentWillUnmount() {}

  render() {
    return (
      <div className="container">
        <span>{this.props.item.name}</span>
        <span>£{this.props.item.price.toFixed(2)}</span>
        <span>
          {this.props.item.quantity < 1 ? (
            <Button onClick={() => this.props.buttonHandler(this.props.item)}>
              Add to Basket
            </Button>
          ) : (
            <Button disabled={true}>In Basket</Button>
          )}
        </span>
      </div>
    );
  }
}

ListItem.propTypes = {};

export default ListItem;
