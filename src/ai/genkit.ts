import {genkit, Plugin} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';
import {nextPlugin} from '@genkit-ai/next';

export const ai = genkit({
  plugins: [
    googleAI(),
    nextPlugin({
      // We are mounting the Genkit API on `/api/genkit`.
      // By default, Next.js has a 30-second timeout on API routes.
      // We can increase this to accommodate longer-running flows.
      // maxDuration: 60,
    }),
  ],
  // model: 'googleai/gemini-2.5-flash',
});
