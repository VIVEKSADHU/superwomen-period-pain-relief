
import { CheckCircle, XCircle } from 'lucide-react';

export default function WhoIsThisForSection() {
  return (
    <section id="who-is-this-for" className="py-20 sm:py-24">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="rounded-lg border border-green-200 bg-green-50/50 p-8">
            <h3 className="font-headline text-2xl font-bold text-green-900">This is for you if...</h3>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                <span className="text-lg text-green-800/90">Your period pain feels debilitating and disrupts your life.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                <span className="text-lg text-green-800/90">You rely on painkillers but worry about long-term use.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                <span className="text-lg text-green-800/90">You want simple, natural habits for comfort, not complex routines.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                <span className="text-lg text-green-800/90">You’re a student or working professional who can’t afford to lose days every month.</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50/50 p-8">
            <h3 className="font-headline text-2xl font-bold text-red-900">This is NOT for you if...</h3>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start">
                <XCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                <span className="text-lg text-red-800/90">You have been diagnosed with a severe condition like Endometriosis or PCOS (please consult your doctor).</span>
              </li>
              <li className="flex items-start">
                <XCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                <span className="text-lg text-red-800/90">You are looking for an instant "magic pill" cure. This is about building gentle habits.</span>
              </li>
              <li className="flex items-start">
                <XCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                <span className="text-lg text-red-800/90">You are not willing to spend 5-10 minutes a day on your well-being during your cycle.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
