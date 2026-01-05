'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Printer } from 'lucide-react';
import {
  generateGentleYogaCalendar,
  GentleYogaCalendarInput,
} from '@/ai/flows/gentle-yoga-calendar';
import { Card, CardContent } from '@/components/ui/card';

const formSchema = z.object({
  userExperience: z.string().min(1, 'Please select your experience level.'),
  menstrualSymptoms: z.string().min(10, 'Please describe your symptoms briefly.'),
  timeOfDayPreference: z.string().min(1, 'Please select a time of day.'),
});

export default function GentleYogaCalendarGenerator() {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedCalendar, setGeneratedCalendar] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userExperience: 'beginner',
      menstrualSymptoms: '',
      timeOfDayPreference: 'morning',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGeneratedCalendar(null);
    try {
      const input: GentleYogaCalendarInput = values;
      const result = await generateGentleYogaCalendar(input);
      setGeneratedCalendar(result.calendar);
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error',
        description: 'Failed to generate your calendar. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }
  
  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow && generatedCalendar) {
      printWindow.document.write('<html><head><title>Your 7-Day Gentle Yoga Calendar</title>');
      printWindow.document.write('<style>body { font-family: sans-serif; } pre { white-space: pre-wrap; word-wrap: break-word; }</style>');
      printWindow.document.write('</head><body>');
      printWindow.document.write('<h1>Your 7-Day Gentle Yoga Calendar</h1>');
      printWindow.document.write(`<pre>${generatedCalendar}</pre>`);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div>
      {!generatedCalendar ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="userExperience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Yoga Experience</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Some Experience</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="timeOfDayPreference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Time</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preferred time" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="morning">Morning</SelectItem>
                      <SelectItem value="afternoon">Afternoon</SelectItem>
                      <SelectItem value="evening">Evening</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="menstrualSymptoms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Symptoms</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., lower back pain, cramps, feeling tired..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                'Create My Calendar'
              )}
            </Button>
          </form>
        </Form>
      ) : (
        <Card>
          <CardContent className="pt-6">
            <h4 className="font-bold mb-4 text-center">Your Personal Yoga Plan:</h4>
            <div className="max-h-60 overflow-y-auto rounded-md border bg-muted p-4 text-sm">
              <pre className="whitespace-pre-wrap font-body">{generatedCalendar}</pre>
            </div>
            <div className="mt-4 flex gap-2">
                <Button onClick={() => setGeneratedCalendar(null)} variant="outline" className="w-full">
                Create New
                </Button>
                <Button onClick={handlePrint} className="w-full">
                <Printer className="mr-2 h-4 w-4" />
                Print
                </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
