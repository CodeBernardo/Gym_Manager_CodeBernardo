import { Workout } from "./workout.interface";

interface User {
  id: string;
  name: string;
  age: number;
  email: string;
  height: number;
  weight: number;
  goal: number;
  password: string;
  role: "admin" | "coach" | "user";
  createdAt: Date | string;
  updatedAt: Date | string;
  permissions: {
    create_user: boolean;
    update_user: boolean;
    create_workout: boolean;
    update_workout: boolean;
    search_users: boolean;
    delete_user: boolean;
  },
  workouts?: Workout ;
}

export type { User }