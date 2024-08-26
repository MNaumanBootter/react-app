import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Smith" } });
  };

  return (
    <>
      <div>{game.player.name}</div>
      <button onClick={handleClick}>Update name</button>
    </>
  );
}

export default App;
