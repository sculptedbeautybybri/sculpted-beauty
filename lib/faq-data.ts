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
      "Both are FDA-approved wrinkle relaxers that temporarily soften the appearance of expression lines. They differ in formulation and onset, and Briana will help you decide which is the better fit during your consultation.",
  },
  {
    question: "Is there downtime after treatment?",
    answer:
      "Most injectable treatments involve little to no downtime, though mild swelling or bruising at the injection site is possible. Ultra Laser treatments may involve short-term redness depending on the intensity used — this is reviewed in detail before your appointment.",
  },
  {
    question: "How do I prepare for my appointment?",
    answer:
      "Avoid blood thinners, alcohol, and excessive sun exposure for a few days prior to injectable appointments when possible. Specific pre-care instructions are provided ahead of your visit.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We ask for at least 24 hours' notice to cancel or reschedule an appointment so the time can be offered to another patient. Late cancellations and no-shows may be subject to a fee.",
  },
  {
    question: "Are results guaranteed?",
    answer:
      "Aesthetic outcomes vary by individual anatomy, product, and technique, so specific results cannot be guaranteed. Briana focuses on conservative, individualized treatment plans aimed at natural-looking outcomes.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book directly online through our Boulevard scheduling portal, available on every page of this site via the Book Now button.",
  },
];

export const SERVICE_FAQS: Record<string, FaqItem[]> = {
  "wrinkle-relaxers": [
    {
      question: "How long do Jeuveau and Daxxify results last?",
      answer:
        "Individual results vary, but wrinkle relaxers are temporary and typically require maintenance treatments over time. Briana will discuss expected timelines based on your anatomy and goals.",
    },
    {
      question: "When will I see results?",
      answer:
        "Onset varies by product and individual. Most patients begin noticing softened lines within several days, with full effect typically visible within one to two weeks.",
    },
    {
      question: "Does it hurt?",
      answer:
        "Most patients describe the sensation as a quick pinch. Fine needles and a careful technique are used to keep discomfort minimal.",
    },
  ],
  "dermal-fillers": [
    {
      question: "Which filler is right for me?",
      answer:
        "The right filler depends on the area being treated and your desired outcome. Briana will recommend a product and technique tailored to your facial anatomy during your consultation.",
    },
    {
      question: "Will filler look natural?",
      answer:
        "Briana's approach favors conservative, layered treatment aimed at facial balance and natural-looking volume — never an overdone result.",
    },
    {
      question: "How long does filler last?",
      answer:
        "Longevity varies by treatment area, product, and individual metabolism. This is reviewed in detail during your consultation.",
    },
  ],
  "ultra-laser": [
    {
      question: "What skin concerns does Ultra Laser address?",
      answer:
        "Ultra Laser is used to help improve the appearance of skin texture, tone, and pigmentation concerns as part of an individualized treatment plan.",
    },
    {
      question: "Is there downtime?",
      answer:
        "Downtime depends on the intensity of treatment selected. Briana will walk you through what to expect for recovery before your session.",
    },
    {
      question: "How many sessions will I need?",
      answer:
        "The number of recommended sessions depends on your specific skin concerns and goals, and will be outlined during your consultation.",
    },
  ],
  "hair-restoration": [
    {
      question: "What is KeraLase?",
      answer:
        "KeraLase is a hair restoration treatment that pairs KeraFactor growth-factor serum with Ultra laser technology, complemented by red light therapy, to help support a healthier-looking scalp and fuller hair over time.",
    },
    {
      question: "Am I a candidate for hair restoration?",
      answer:
        "Candidacy depends on your pattern and stage of thinning. Briana will assess your scalp during a consultation and let you know whether KeraLase is an appropriate option for your goals.",
    },
    {
      question: "How many sessions will I need?",
      answer:
        "Hair restoration typically requires a series of sessions spaced over time. The exact number and interval depend on your individual scalp assessment and will be outlined during your consultation.",
    },
    {
      question: "Is red light therapy done separately?",
      answer:
        "No — red light therapy is included as part of each KeraLase session, paired with the KeraFactor and Ultra laser steps in the same appointment.",
    },
  ],
  "iv-therapy": [
    {
      question: "What can IV therapy help with?",
      answer:
        "Our IV blends are formulated to support hydration, energy, recovery, and general wellness as part of a broader self-care routine.",
    },
    {
      question: "How long does a session take?",
      answer:
        "Most IV therapy sessions take approximately 30 to 45 minutes, depending on the blend selected.",
    },
    {
      question: "Is IV therapy safe?",
      answer:
        "IV therapy is administered by a Registered Nurse following a review of your health history to help ensure it's an appropriate option for you.",
    },
  ],
  "medical-grade-skincare": [
    {
      question: "Why medical grade over drugstore skincare?",
      answer:
        "Medical grade lines like Epionce and Hydrinity are formulated with higher concentrations of active ingredients and are recommended to complement and extend the results of in-office treatments.",
    },
    {
      question: "Can I purchase skincare without an injectable treatment?",
      answer:
        "Yes. Briana can recommend a personalized skincare regimen during a dedicated consultation, independent of any injectable treatment.",
    },
  ],
};
