import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import Like from "./components/Like";
import ListGroup from "./components/ListGroup/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const [tags, setTags] = useState(['happy', 'cheerful'])
  const items = ["Lahore", "Islamabad"];
  const handleSelectItem = (item: any) => {
    // Add
    setTags([...tags, 'exciting']);
    
    // Remove
    setTags(tags.filter(tag => tag != 'happy'));
    
    // Update
    setTags(tags.map(tag => tag === 'happy'? 'happiness' : tag));
  };

  return (
    <div>
      {tags}
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
