export type BookPanditTestimonial = {
  id: string;
  quote: string;
  name: string;
  location: string;
  rating: number;
};

export const BOOK_PANDIT_TESTIMONIALS: BookPanditTestimonial[] = [
  {
    id: "ramesh",
    quote:
      "Booked Satyanarayana Pooja at home. The pandit was very knowledgeable and performed the pooja beautifully with proper explanations.",
    name: "Ramesh B.",
    location: "Hyderabad",
    rating: 5,
  },
  {
    id: "lakshmi",
    quote:
      "Very easy booking process and great support. Highly recommended for any urgent or planned family puja services.",
    name: "Lakshmi K.",
    location: "Bengaluru",
    rating: 5,
  },
  {
    id: "sanjay",
    quote:
      "Transparent pricing and experienced pandits. Ekatva made our grihapravesam incredibly special and peaceful.",
    name: "Sanjay M.",
    location: "Chennai",
    rating: 5,
  },
];
