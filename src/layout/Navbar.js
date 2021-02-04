import React from "react";
import { useDispatch } from "react-redux";
import { getUsersAction } from "../redux/actions/userActions";
import { Nav, Logo, Button, Menu } from "../styles";
import { useRandomColor } from "../hooks/useRandomColor";
import { getColorAction } from "../redux/actions/colorActions";

const Navbar = () => {
  const dispatch = useDispatch();

  const getUsers = () => dispatch(getUsersAction());
  const getColor = (color) => dispatch(getColorAction(color));

  const { getRandomColor, color } = useRandomColor();

  const handlerClickGetUsers = () => {
    getRandomColor();
    getColor(color);
    getUsers();
  };

  return (
    <Nav>
      <Logo>Users</Logo>
      <Menu>
        <Button onClick={handlerClickGetUsers}>Get Users</Button>
      </Menu>
    </Nav>
  );
};

export default Navbar;
