// import { AdminNavBar, CoachNavBar, UserNavBar } from "../navBar";
import React from "react";


const AppHeader = () => {
  return (
    <>
      <header>
        <h1>Gym Manager</h1>
        <img src="*" alt="" />
        {
          // role === "admin" ? <AdminNavBar/> :
          // role === "coach" ? <CoachNavBar/> :
          // role === "user"  ? <UserNavBar /> :
          // null
        }
        <button>Logout</button>
      </header>
    </>
  );
};

export { AppHeader };
