import { FaqItem } from "@/components/FaqAccordion";

export const GENERAL_FAQS: FaqItem[] = [
  {
    question: "Do I need a consultation before treatment?",
    answer:
      "Yes. Every new patient begins with a consultation so Briana can review your goals, medical history, and facial anatomy before recommending a personalized treatment plan.",
  },
  {
    question: "How much do treatments cost?",
    answer:
      "Pricing depends on the treatment area, product, and amount used. Exact pricing is provided during your consultation once your individualized plan is determined.",
  },
  {
    question: "What is the difference between Jeuveau and Daxxify?",
    answer:
      "Both are FDA-approved wrinkle relaxers that temporarily soften the appearance of expression lines. They differ in formulation and onset, and Briana will help you decide which is the best fit during your consultation. Daxxify typically lasts 3–5 months, while Jeuveau lasts about 3 months. Pricing is the same per area for either product.",
  },
  {
    question: "Is there downtime after treatment?",
    answer:
      "Most injectable treatments involve little to no downtime, though mild swelling or bruising at the injection site is possible. Ultra Laser treatments may involve short-term redness depending on the treatment.",
  },
  {
    question: "How do I prepare for my appointment?",
    answer:
      "Avoid blood thinners, alcohol, and excessive sun exposure for a few days prior to injectable appointments when possible. Specific pre-care instructions are provided ahead of your visit.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Please cancel online or by phone more than 24 hours in advance to avoid a fee, so the time can be offered to another patient. Appointments canceled less than 24 hours in advance are subject to a 50% service charge.",
  },
  {
    question: "Are results guaranteed?",
    answer:
      "Aesthetic outcomes vary by individual anatomy, product, and technique, so specific results cannot be guaranteed. Briana focuses on conservative, individualized treatment plans aimed at natural-looking enhancement.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book directly online through our Boulevard scheduling portal, available on every page of the site, or contact us with any questions.",
  },
];

export const SERVICE_FAQS: Record<string, FaqItem[]> = {
  "wrinkle-relaxers": [
    {
      question: "How long do Jeuveau and Daxxify results last?",
      answer:
        "Individual results vary, but Daxxify typically lasts 3–5 months and Jeuveau lasts about 3 months. Wrinkle relaxers are temporary and typically require maintenance treatments to sustain results.",
    },
    {
      question: "When will I see results?",
      answer:
        "Onset varies by product and individual. Most patients begin noticing softened lines within several days, with full results typically appearing within two weeks.",
    },
    {
      question: "Does it hurt?",
      answer:
        "Most patients describe the sensation as a quick pinch. Fine needles and a careful technique are used to keep treatment as comfortable as possible.",
    },
  ],
  "dermal-fillers": [
    {
      question: "Which filler is right for me?",
      answer:
        "The right filler depends on the area being treated and your desired outcome. Briana will recommend a product based on your anatomy, goals, and how long you would like results to last.",
    },
    {
      question: "Will filler look natural?",
      answer:
        "When placed conservatively and tailored to your facial structure, filler should enhance your features without looking overdone. Briana prioritizes natural, balanced results.",
    },
    {
      question: "How long does filler last?",
      answer:
        "Filler longevity depends on the product and treatment area, but most fillers last between 6 and 18 months. Maintenance treatments help preserve results over time.",
    },
  ],
  "ultra-laser": [
    {
      question: "What skin concerns does Ultra Laser address?",
      answer:
        "Ultra Laser is used to help improve the appearance of skin texture, tone, and pigmentation concerns, including sun damage and uneven skin tone. It is designed for a range of skin types and tones.",
    },
    {
      question: "Is there downtime?",
      answer:
        "Ultra Laser is designed as a low-downtime treatment. Most patients experience mild redness for a short period and can return to normal activities quickly, with specific aftercare guidance provided.",
    },
    {
      question: "How many sessions will I need?",
      answer:
        "Most patients benefit from a series of 3 treatments spaced about 4 weeks apart for optimal results, though your plan will be tailored to your skin goals and response to treatment.",
    },
  ],
  "hair-restoration": [
    {
      question: "What is KeraLase?",
      answer:
        "KeraLase is a hair restoration treatment that pairs KeraFactor growth-factor serum with Ultra laser technology to support the appearance of fuller, healthier-looking hair. Each session includes red light therapy for the scalp.",
    },
    {
      question: "Am I a candidate for hair restoration?",
      answer:
        "Candidates are typically experiencing early to moderate hair thinning or shedding and are looking for a non-surgical option. A consultation is needed to assess your scalp, hair goals, and whether KeraLase is right for you.",
    },
    {
      question: "How many sessions will I need?",
      answer:
        "Most patients complete a series of 6 sessions, spaced 3–4 weeks apart, to build and maintain results. Pricing is $299 per session.",
    },
    {
      question: "Is red light therapy done separately?",
      answer:
        "No — red light therapy is included in each KeraLase session for the scalp, so there's no separate appointment or add-on fee.",
    },
  ],
  "medical-grade-skincare": [
    {
      question: "Why medical grade over drugstore skincare?",
      answer:
        "Medical grade lines like Epionce and Hydrinity are formulated with higher concentrations of active ingredients and are clinically tested for results. They are selected to complement in-office treatments and support skin health between visits.",
    },
    {
      question: "Can I purchase skincare without an injectable treatment?",
      answer:
        "Yes. Skincare consultations are available, and products can be purchased without an injectable treatment. Briana can recommend a routine tailored to your skin type and goals.",
    },
  ],
};
