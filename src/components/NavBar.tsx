import React from "react";

interface Props {
  cartItemsCount: number;
}

const NavBar = ({ cartItemsCount }: Props) => {
  return <div>NavBar: {cartItemsCount}</div>;
};

interface Props {
  cartItemsCount: number;
}

export default NavBar;
