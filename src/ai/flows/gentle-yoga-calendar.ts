'use server';

/**
 * @fileOverview Generates a personalized 7-day gentle yoga calendar suitable for beginners experiencing menstrual discomfort.
 *
 * - generateGentleYogaCalendar - A function that generates the yoga calendar.
 * - GentleYogaCalendarInput - The input type for the generateGentleYogaCalendar function.
 * - GentleYogaCalendarOutput - The return type for the generateGentleYogaCalendar function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

const GentleYogaCalendarInputSchema = z.object({
  userExperience: z
    .string()
    .describe("The user's yoga experience level (e.g., beginner, intermediate, advanced)."),
  menstrualSymptoms: z
    .string()
    .describe("A description of the user's current menstrual symptoms (e.g., cramps, fatigue, mood swings)."),
  timeOfDayPreference: z
    .string()
    .describe('The preferred time of day for yoga practice (e.g., morning, afternoon, evening).'),
});
export type GentleYogaCalendarInput = z.infer<typeof GentleYogaCalendarInputSchema>;

const GentleYogaCalendarOutputSchema = z.object({
  calendar: z
    .string()
    .describe('A 7-day yoga calendar with specific poses for each day, tailored to the user.'),
});
export type GentleYogaCalendarOutput = z.infer<typeof GentleYogaCalendarOutputSchema>;

export async function generateGentleYogaCalendar(
  input: GentleYogaCalendarInput
): Promise<GentleYogaCalendarOutput> {
  return gentleYogaCalendarFlow(input);
}

const prompt = ai.definePrompt({
  name: 'gentleYogaCalendarPrompt',
  input: {schema: GentleYogaCalendarInputSchema},
  output: {schema: GentleYogaCalendarOutputSchema},
  prompt: `You are a certified yoga instructor specializing in gentle and restorative yoga for women experiencing menstrual discomfort.

  Based on the user's input, create a personalized 7-day yoga calendar with specific poses for each day.
  The calendar should be tailored to beginners and safe for those experiencing menstrual discomfort.
  Consider the user's experience level, symptoms, and time of day preference when selecting poses.

  User Experience: {{{userExperience}}}
  Menstrual Symptoms: {{{menstrualSymptoms}}}
  Time of Day Preference: {{{timeOfDayPreference}}}

  Format the calendar in a clear and easy-to-read format.
  Each day should include a list of poses with brief instructions.
  Include modifications for poses as needed.

  Example Calendar Format:

  Day 1:
  - Pose 1: (Instructions and modifications)
  - Pose 2: (Instructions and modifications)
  - Pose 3: (Instructions and modifications)

  Day 2:
  - Pose 1: (Instructions and modifications)
  - Pose 2: (Instructions and modifications)
   ...

  Return only the 7-day calendar as a string.
  Do not include any other introductory or concluding text.
  Ensure calendar is gentle, beginner-friendly, and safe for menstrual discomfort.
  Focus on poses that alleviate cramps, reduce bloating, and promote relaxation.
  Exclude advanced poses.
  Limit duration to 15 minutes per day.`,
});

const gentleYogaCalendarFlow = ai.defineFlow(
  {
    name: 'gentleYogaCalendarFlow',
    inputSchema: GentleYogaCalendarInputSchema,
    outputSchema: GentleYogaCalendarOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
