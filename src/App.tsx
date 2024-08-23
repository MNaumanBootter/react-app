import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import Like from "./components/Like";
import ListGroup from "./components/ListGroup/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const [bugs, setBugs] = useState([
    {id: 1, title: 'Bug 1', fixed: false},
    {id: 2, title: 'Bug 2', fixed: false}
  ])
  const items = ["Lahore", "Islamabad"];
  const handleSelectItem = (item: any) => {
    // Update
    setBugs(bugs.map(bug => bug.id === 1? {...bug, fixed: true} : bug));
  };

  return (
    <div>
      {bugs[0].fixed ? 1 : 0}
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
