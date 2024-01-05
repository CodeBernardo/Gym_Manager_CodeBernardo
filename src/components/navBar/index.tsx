import React from "react";

const AdminNavBar = () => {
  return (
    <ul>
      <li>Home</li>
      <li>Administrar usuários</li>
    </ul>
  );
};

const CoachNavBar = () => {
  return (
    <ul>
      <li>Home</li>
      <li>Administrar alunos</li>
    </ul>
  );
};

const UserNavBar = () => {
  return (
    <ul>
      <li>Home</li>
      <li>Treinos</li>
    </ul>
  );
};

export { AdminNavBar, CoachNavBar, UserNavBar };
