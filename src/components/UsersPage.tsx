import React from "react";
import { UserRow } from "./UserRow";
import { useUsers } from "../hooks/useUsers";

export const UsersPage = () => {
  const { users } = useUsers();

  console.log(users);

  return (
    <>
      <h3>Usuarios:</h3>

      <table className="w-[500px] bg-black rounded-xl text-white">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          <UserRow />
          <UserRow />
          <UserRow />
          <UserRow />
        </tbody>
      </table>

      <div className="flex justify-between w-[500px] mt-2">
        <button className="p-2 bg-blue-500 text-white rounded-[10px]">
          Anteriores
        </button>
        <button className="p-2 bg-blue-500 text-white rounded-[10px]">
          Siguientes
        </button>
      </div>
    </>
  );
};
