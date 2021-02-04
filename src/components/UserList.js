import React from "react";
import { useSelector } from "react-redux";
import UserListItem from "./UserListItem";
import Spinner from "../layout/Spinner";
import { Table, Thead, TH, TR } from "../styles";

import { ErrorAlert } from "../styles";

const UserList = () => {
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);
  const color = useSelector((state) => state.color.color);

  return (
    <div>
      <h2 style={{ backgroundColor: color, padding: 8 }}>List of Users</h2>

      {error ? <ErrorAlert>There was a mistake</ErrorAlert> : null}
      {loading ? <Spinner /> : null}

      <Table>
        <Thead>
          <TR>
            <TH>ID</TH>
            <TH>Nombre</TH>
            <TH>Email</TH>
          </TR>
        </Thead>
        <tbody>
          {users.map((user) => (
            <UserListItem key={user.id} user={user} />
          ))}
        </tbody>
      </Table>
      {users.length === 0 && <ErrorAlert>No users</ErrorAlert>}
    </div>
  );
};

export default UserList;
