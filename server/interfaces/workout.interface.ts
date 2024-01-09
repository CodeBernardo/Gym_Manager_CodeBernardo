interface Workout {
  sunday?: [{ exercise: string; reps: string }];
  monday?: [{ exercise: string; reps: string }];
  tuesday?: [{ exercise: string; reps: string }];
  wednesday?: [{ exercise: string; reps: string }];
  thursday?: [{ exercise: string; reps: string }];
  friday?: [{ exercise: string; reps: string }];
  saturday?: [{ exercise: string; reps: string }];
}

export type { Workout }