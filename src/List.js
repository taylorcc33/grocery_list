import Grocery from "./Grocery";

const List = (props) => {
  const renderList = () => {
    return props.groceries.map((grocery) => {
      return (
        <Grocery
          key={grocery.id}
          id={grocery.id}
          name={grocery.name}
          complete={grocery.complete}
          toggle2={props.toggle1}
          deleteProp={props.deleteProp}
        />
      );
    });
  };

  return <ul>{renderList()}</ul>;
};
export default List;
