export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
}

export interface Student extends User {
  goal: string;
  physicalRestrictions: string[];
  trainerId: string;
}

export interface Exercise {
  id: string;
  name: string;
  muscleGroup: string;
  instructions: string;
  imageUrl: string;
  videoUrl?: string;
}

export interface WorkoutExercise {
  exerciseId: string;
  sets: string;
  reps: string;
  load?: string;
  rest: string;
}

export interface WorkoutPlan {
  id: string;
  name: string;
  studentId: string;
  exercises: WorkoutExercise[];
  isActive: boolean;
}

export interface PhysicalAssessment {
  id: string;
  studentId: string;
  date: string; // ISO date string
  weight: number;
  bodyFatPercentage: number;
  waist: number;
  hip: number;
  chest: number;
  arm: number;
  leg: number;
}

export type ScheduleStatus = 'Concluído' | 'Faltou' | 'Próximo';

export interface ScheduleEntry {
  id: string;
  studentId: string;
  workoutPlanId: string;
  date: string; // ISO date string
  status: ScheduleStatus;
}
