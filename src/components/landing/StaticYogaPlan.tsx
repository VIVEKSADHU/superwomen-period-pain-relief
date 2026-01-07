import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const yogaPlan = [
  {
    day: 1,
    theme: 'Gentle Flow for Cramp Relief',
    poses: [
      'Child\'s Pose: Kneel on the floor, sit back on your heels, then fold forward, resting your forehead on the mat.',
      'Cat-Cow Stretch: On hands and knees, inhale to arch your back (cow) and exhale to round your spine (cat).',
      'Supine Spinal Twist: Lie on your back, bring one knee to your chest, then gently guide it across your body.',
    ],
  },
  {
    day: 2,
    theme: 'Restorative Poses for Fatigue',
    poses: [
      'Legs-Up-The-Wall: Sit sideways next to a wall, then swing your legs up the wall as you lie back.',
      'Supported Bridge Pose: Lie on your back with knees bent. Lift your hips and slide a block or cushion underneath.',
      'Corpse Pose (Savasana): Lie flat on your back, arms and legs relaxed. Breathe naturally.',
    ],
  },
  {
    day: 3,
    theme: 'Hip Opening for Tension Release',
    poses: [
      'Butterfly Pose: Sit with the soles of your feet together, letting your knees fall out to the sides.',
      'Pigeon Pose (Gentle): From hands and knees, bring one knee forward towards your wrist. Keep hips level.',
      'Happy Baby Pose: Lie on your back and grab the outsides of your feet, gently pulling your knees towards your armpits.',
    ],
  },
  {
    day: 4,
    theme: 'Lower Back Soothers',
    poses: [
      'Knees-to-Chest: Lie on your back and hug both knees into your chest, gently rocking side to side.',
      'Sphinx Pose: Lie on your stomach and prop yourself up on your forearms, gently arching your back.',
      'Seated Forward Bend: Sit with legs extended. Hinge at your hips to fold forward gently.',
    ],
  },
  {
    day: 5,
    theme: 'Energizing Morning Stretch',
    poses: [
      'Cat-Cow Stretch: A great way to wake up the spine.',
      'Downward-Facing Dog (Gentle): From hands and knees, lift your hips up and back. Keep knees bent.',
      'Mountain Pose with Side Bends: Stand tall, reach arms up, and gently bend side to side.',
    ],
  },
  {
    day: 6,
    theme: 'Calming Evening Wind-Down',
    poses: [
      'Child\'s Pose: Calms the nervous system.',
      'Seated Forward Bend: A quiet, introspective pose.',
      'Legs-Up-The-Wall: Perfect for reducing swelling and promoting relaxation before bed.',
    ],
  },
  {
    day: 7,
    theme: 'Full Body Nourishment',
    poses: [
      'Corpse Pose (Savasana): Start with a few minutes of quiet rest.',
      'Your Favorite Poses: Choose 2-3 poses from the week that felt best for your body.',
      'Guided Meditation: End with 5 minutes of mindful breathing or a guided meditation for relaxation.',
    ],
  },
];

export default function StaticYogaPlan() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {yogaPlan.map((dayPlan) => (
        <AccordionItem value={`item-${dayPlan.day}`} key={dayPlan.day}>
          <AccordionTrigger>
            <div className="text-left">
              <p className="font-bold">Day {dayPlan.day}: <span className="font-normal">{dayPlan.theme}</span></p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc space-y-2 pl-6 text-sm text-muted-foreground">
              {dayPlan.poses.map((pose) => (
                <li key={pose}>{pose}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
