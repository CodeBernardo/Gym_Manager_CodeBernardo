import { User } from "../interfaces/user.interface";

const userDatabase: User[] = [
  {
    id: "db443871-7522-4d81-be0b-1198c775cfc5",
    name: "Adalberto rangel",
    age: 35,
    email: "fulaninho@mail.com",
    height: 1.74,
    weight: 84.5,
    goal: 72,
    password: "123456789",
    role: "admin",
    createdAt: "2024-01-09T20:29:18.999Z",
    updatedAt: "2024-01-09T20:29:18.999Z",
    permissions: {
      create_user: true,
      update_user: true,
      create_workout: true,
      update_workout: true,
      search_users: true,
      delete_user: true,
    },
  },
  {
    id: "e2754425-98fe-4950-87c9-8830cd853544",
    name: "Floriano da Cunha",
    age: 27,
    email: "floricunha@mail.com",
    height: 1.82,
    weight: 80,
    goal: 76,
    password: "987654321",
    role: "coach",
    createdAt: "2024-01-09T20:29:18.999Z",
    updatedAt: "2024-01-09T20:29:18.999Z",
    permissions: {
      create_user: true,
      update_user: false,
      create_workout: true,
      update_workout: true,
      search_users: true,
      delete_user: false,
    },
  },
  {
    id: "f8623de3-f89c-4dd5-b549-fa22505a976e",
    name: "São Thomé das Letras",
    age: 40,
    email: "cogumelosazuis@mail.com",
    height: 1.79,
    weight: 94.2,
    goal: 75,
    password: "123987456",
    role: "user",
    createdAt: "2024-01-09T20:29:18.999Z",
    updatedAt: "2024-01-09T20:29:18.999Z",
    permissions: {
      create_user: false,
      update_user: false,
      create_workout: false,
      update_workout: false,
      search_users: false,
      delete_user: false,
    },
    workouts: {
      sunday: [
        {
          exercise: "exercise 1",
          reps: "4 x 8-12",
        },
        // ...
      ],
      monday: [
        {
          exercise: "exercise 1",
          reps: "4 x 8-12",
        },
        // ...
      ],
      tuesday: [
        {
          exercise: "exercise 1",
          reps: "4 x 8-12",
        },
        // ...
      ],
      wednesday: [
        {
          exercise: "exercise 1",
          reps: "4 x 8-12",
        },
        // ...
      ],
      thursday: [
        {
          exercise: "exercise 1",
          reps: "4 x 8-12",
        },
        // ...
      ],
      friday: [
        {
          exercise: "exercise 1",
          reps: "4 x 8-12",
        },
        // ...
      ],
      saturday: [
        {
          exercise: "exercise 1",
          reps: "4 x 8-12",
        },
        // ...
      ],
    },
  },
];

export { userDatabase };
