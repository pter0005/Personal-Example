'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting personalized workout plans for students, 
 * based on their goals, fitness level, and physical restrictions.
 *
 * @exports suggestWorkoutPlan - An async function that takes student details and returns a suggested workout plan.
 * @exports SuggestWorkoutPlanInput - The input type for the suggestWorkoutPlan function.
 * @exports SuggestWorkoutPlanOutput - The output type for the suggestWorkoutPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestWorkoutPlanInputSchema = z.object({
  studentGoals: z.string().describe('The fitness goals of the student, e.g., weight loss, muscle gain, improved endurance.'),
  fitnessLevel: z.enum(['beginner', 'intermediate', 'advanced']).describe('The current fitness level of the student.'),
  physicalRestrictions: z.string().describe('Any physical restrictions or injuries the student has, e.g., knee pain, back problems.'),
  preferredWorkoutStyle: z.string().describe('The preferred workout style of the student, e.g., HIIT, strength training, yoga.'),
  availableEquipment: z.string().describe('The equipment available to the student, e.g., dumbbells, resistance bands, gym access.'),
});

export type SuggestWorkoutPlanInput = z.infer<typeof SuggestWorkoutPlanInputSchema>;

const SuggestWorkoutPlanOutputSchema = z.object({
  workoutPlan: z.string().describe('A detailed workout plan tailored to the student, including exercises, sets, reps, and rest times.'),
  notes: z.string().optional().describe('Additional notes or considerations for the trainer regarding the workout plan.'),
});

export type SuggestWorkoutPlanOutput = z.infer<typeof SuggestWorkoutPlanOutputSchema>;

export async function suggestWorkoutPlan(input: SuggestWorkoutPlanInput): Promise<SuggestWorkoutPlanOutput> {
  return suggestWorkoutPlanFlow(input);
}

const suggestWorkoutPlanPrompt = ai.definePrompt({
  name: 'suggestWorkoutPlanPrompt',
  input: {schema: SuggestWorkoutPlanInputSchema},
  output: {schema: SuggestWorkoutPlanOutputSchema},
  prompt: `You are an expert personal trainer who specializes in creating personalized workout plans.

  Based on the student's goals, fitness level, physical restrictions, preferred workout style, and available equipment, create a detailed workout plan.

  Student Goals: {{{studentGoals}}}
  Fitness Level: {{{fitnessLevel}}}
  Physical Restrictions: {{{physicalRestrictions}}}
  Preferred Workout Style: {{{preferredWorkoutStyle}}}
  Available Equipment: {{{availableEquipment}}}

  Provide a workout plan that includes specific exercises, sets, reps, and rest times. Also, include any notes or considerations for the trainer.

  Workout Plan:`, 
});

const suggestWorkoutPlanFlow = ai.defineFlow(
  {
    name: 'suggestWorkoutPlanFlow',
    inputSchema: SuggestWorkoutPlanInputSchema,
    outputSchema: SuggestWorkoutPlanOutputSchema,
  },
  async input => {
    const {output} = await suggestWorkoutPlanPrompt(input);
    return output!;
  }
);
