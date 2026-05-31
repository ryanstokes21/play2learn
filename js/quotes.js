const testimonials = [
  {
    name: 'Sarah Mitchell',
    quote:
      'The Math Facts Game actually made practicing math fun—my kids don’t complain about homework anymore.',
  },
  {
    name: 'Jason Carter',
    quote:
      'Anagram Hunt is addictive in the best way. It really pushes my brain to think faster.',
  },
  {
    name: 'Emily Rodriguez',
    quote:
      'Simple, fast, and actually helpful for learning. I noticed improvement in just a week.',
  },
  {
    name: 'Michael Thompson',
    quote:
      'I love how the games get harder as you improve. It keeps it challenging.',
  },
  {
    name: 'Ava Johnson',
    quote:
      'Perfect for quick practice sessions—five minutes turns into twenty without noticing.',
  },
  {
    name: 'Daniel Lee',
    quote:
      'Great for building confidence with both math and vocabulary skills.',
  },
  {
    name: 'Olivia Brown',
    quote: 'Clean design and easy to use. No distractions, just learning.',
  },
  {
    name: 'Ethan Walker',
    quote:
      'This is way better than boring worksheets. It feels like playing instead of studying.',
  },
];

let index = 0;

export default function showTestimonial() {
  const testimonial = testimonials[index];
  document.getElementById('quote').textContent = testimonial.quote;
  document.getElementById('name').textContent = `~ ${testimonial.name}`;
  index = (index + 1) % testimonials.length;
}
