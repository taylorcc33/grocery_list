import React from "react";
import { Container, Header } from "semantic-ui-react";
import List from "./List";

class GroceryList extends React.Component {
  state = {
    groceries: [
      { id: 1, name: "Bananas", complete: true },
      { id: 2, name: "Bread", complete: false },
      { id: 3, name: "Milk", complete: true },
    ],
  };

  toggle = (id) => {
    let updateGroceries = this.state.groceries.map((t) => {
      if (t.id !== id) {
        return t;
      }
      return { ...t, complete: !t.complete };
    });

    this.setState({
      groceries: updateGroceries,
    });
  };

  render() {
    return (
      <Container>
        <Header as="h1">Grocery List</Header>
        <List
          deleteProp={this.delete}
          toggle1={this.toggle}
          groceries={this.state.groceries}
        />
      </Container>
    );
  }
}

export default GroceryList;
