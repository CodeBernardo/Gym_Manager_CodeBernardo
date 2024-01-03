const AdminNavBar = () => {
  return (
    <ul>
      <li>Home</li>
      <li>Administrar usuários</li>
      <li>Logout</li>
    </ul>
  );
};

const CoachNavBar = () => {
  return (
    <ul>
      <li>Home</li>
      <li>Administrar alunos</li>
      <li>Logout</li>
    </ul>
  );
};

const UserNavBar = () => {
  return (
    <ul>
      <li>Home</li>
      <li>Treinos</li>
      <li>Logout</li>
    </ul>
  );
};

export { AdminNavBar, CoachNavBar, UserNavBar };
