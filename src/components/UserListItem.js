import React from "react";
import { TR, TD } from "../styles";

const UserListItem = ({ user }) => {
  const { id, name, email } = user;
  return (
    <TR>
      <TD>{id}</TD>
      <TD>{name}</TD>
      <TD>{email}</TD>
    </TR>
  );
};

export default UserListItem;
