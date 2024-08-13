import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import Like from "./components/Like";
import ListGroup from "./components/ListGroup/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const [drink, setDrink] = useState({
    title: "Latte",
    price: 5,
  })
  const items = ["Lahore", "Islamabad"];
  const handleSelectItem = (item: any) => {
    setDrink({
      ...drink,
      price: 6,
    });
    console.log(item);
  };

  return (
    <div>
      {drink.price}
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
      <Like onClick={() => {console.log("clicked!")}}></Like>
    </div>
  );
}

export default App;
