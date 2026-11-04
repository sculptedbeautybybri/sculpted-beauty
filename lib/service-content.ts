export interface ServicePageContent {
  slug: string;
  name: string;
  eyebrow: string;
  intro: string;
  benefits: string[];
  process: string[];
  recovery: string;
  metaTitle: string;
  metaDescription: string;
}

export const SERVICE_CONTENT: Record<string, ServicePageContent> = {
  "wrinkle-relaxers": {
    slug: "wrinkle-relaxers",
    name: "Tox",
    eyebrow: "Jeuveau & Daxxify",
    intro:
      "Wrinkle relaxers temporarily soften the appearance of expression lines by relaxing the underlying muscle movement that causes them. Briana offers both Jeuveau and Daxxify, tailoring product choice and dosing to your facial anatomy and goals.",
    benefits: [
      "Softens the appearance of forehead lines, frown lines, and crow's feet",
      "Quick, in-office treatment with little to no downtime",
      "Conservative dosing for a refreshed — never frozen — look",
      "Can be used preventatively to slow the formation of new lines",
    ],
    process: [
      "A consultation to review your medical history, goals, and facial movement",
      "Mapping of injection sites based on your unique muscle anatomy",
      "A series of small injections using a fine needle",
      "Brief aftercare guidance before you leave",
    ],
    recovery:
      "Most patients return to normal activities immediately. Mild redness or small bumps at injection sites typically resolve within a few hours. Results generally begin appearing within several days, with full effect visible within one to two weeks.",
    metaTitle: "Jeuveau & Daxxify Wrinkle Relaxers in Melissa, TX",
    metaDescription:
      "Botox alternative wrinkle relaxer treatments with Jeuveau and Daxxify in Melissa, TX, performed by Briana, RN. Conservative, natural-looking results.",
  },
  "dermal-fillers": {
    slug: "dermal-fillers",
    name: "Dermal Fillers",
    eyebrow: "Facial Balancing",
    intro:
      "Dermal fillers restore and enhance volume in targeted areas of the face — lips, cheeks, jawline, and chin — to support natural facial balance and proportion. Briana's approach favors subtle, layered treatment over dramatic change.",
    benefits: [
      "Restores volume lost to natural aging",
      "Enhances lip shape and definition with a natural result",
      "Sculpts and defines the cheeks, jawline, and chin",
      "Improves overall facial balance and harmony",
    ],
    process: [
      "A detailed consultation to assess facial structure and goals",
      "A numbing period for comfort, where appropriate",
      "Precise, layered injections to achieve natural contour",
      "Post-treatment review and aftercare instructions",
    ],
    recovery:
      "Mild swelling or bruising at the treatment site is common and typically resolves within several days to two weeks. Final results are best assessed after any initial swelling has fully subsided.",
    metaTitle: "Dermal Fillers in Melissa, TX | Lips, Cheeks & Jawline",
    metaDescription:
      "Natural-looking dermal filler treatments for lips, cheeks, jawline, and chin in Melissa, TX with Briana, RN. Personalized facial balancing.",
  },
  "ultra-laser": {
    slug: "ultra-laser",
    name: "Ultra Laser",
    eyebrow: "Skin Rejuvenation",
    intro:
      "Ultra Laser treatments target skin texture, tone, and pigmentation concerns to help reveal a smoother, more even complexion. Treatment intensity is customized to your skin type and goals.",
    benefits: [
      "Improves the appearance of uneven texture and tone",
      "Targets pigmentation and sun damage",
      "Customizable intensity based on skin type and concerns",
      "Complements injectable treatments for a comprehensive result",
    ],
    process: [
      "A skin assessment to determine the appropriate treatment approach",
      "Application of the laser device across the target area",
      "Post-treatment skin protection guidance",
      "A recommended series of sessions, if appropriate for your goals",
    ],
    recovery:
      "Downtime varies with treatment intensity — from no visible downtime to several days of redness or peeling. Sun protection is essential following treatment, and Briana will provide specific aftercare guidance for your skin.",
    metaTitle: "Ultra Laser Skin Rejuvenation in Melissa, TX",
    metaDescription:
      "Ultra Laser treatments for texture, tone, and pigmentation in Melissa, TX, performed by Briana, RN, with a customized recovery plan.",
  },
  "hair-restoration": {
    slug: "hair-restoration",
    name: "Hair Restoration",
    eyebrow: "KeraLase — KeraFactor + Ultra",
    intro:
      "KeraLase pairs KeraFactor growth-factor serum with Ultra laser technology and red light therapy to help stimulate the scalp and support fuller, healthier-looking hair. It's a non-surgical option for patients noticing thinning or early hair loss.",
    benefits: [
      "Combines KeraFactor serum with Ultra laser delivery for deeper scalp penetration",
      "Red light therapy sessions support the scalp's natural response between treatments",
      "Non-surgical, in-office treatment with no incisions or downtime",
      "Personalized treatment intervals based on your degree of thinning and goals",
    ],
    process: [
      "A scalp consultation to assess thinning patterns and candidacy",
      "Application of KeraFactor serum to the treatment area",
      "Ultra laser passes to help enhance absorption",
      "A guided red light therapy session to support the scalp",
    ],
    recovery:
      "There is no downtime with KeraLase. Most patients return to normal activities immediately. Results build gradually with a recommended series of sessions, and Briana will outline an expected timeline based on your scalp assessment.",
    metaTitle: "KeraLase Hair Restoration in Melissa, TX | KeraFactor + Ultra",
    metaDescription:
      "KeraLase hair restoration in Melissa, TX — KeraFactor paired with Ultra laser and red light therapy, performed by Briana, RN, to support fuller-looking hair.",
  },
  "iv-therapy": {
    slug: "iv-therapy",
    name: "IV Therapy",
    eyebrow: "Wellness & Recovery",
    intro:
      "Our physician-formulated IV blends support hydration, energy, recovery, and immune wellness — administered by a Registered Nurse in a relaxed, private setting.",
    benefits: [
      "Rapid hydration support",
      "Formulas designed to support energy and recovery",
      "Immune support blends available",
      "Administered by an experienced Registered Nurse",
    ],
    process: [
      "A brief health history review to select the right blend for you",
      "Comfortable IV placement in a private treatment room",
      "A relaxed 30–45 minute infusion",
      "Post-treatment guidance and hydration recommendations",
    ],
    recovery:
      "There is no downtime associated with IV therapy. Most patients feel refreshed immediately following their session and can resume normal activities right away.",
    metaTitle: "IV Therapy in Melissa, TX | Hydration & Wellness",
    metaDescription:
      "Nurse-administered IV therapy for hydration, energy, recovery, and immune support in Melissa, TX at Sculpted Beauty by Briana.",
  },
  "medical-grade-skincare": {
    slug: "medical-grade-skincare",
    name: "Medical Grade Skincare",
    eyebrow: "Epionce & Hydrinity",
    intro:
      "In-office treatments perform best when paired with a professional-grade skincare routine. Briana curates a personalized regimen using Epionce and Hydrinity to support, protect, and extend your results.",
    benefits: [
      "Formulated with higher concentrations of active ingredients than over-the-counter lines",
      "Supports and extends the results of in-office treatments",
      "Personalized regimens based on your skin type and concerns",
      "Ongoing guidance as your skin's needs evolve",
    ],
    process: [
      "A skin consultation to assess your current routine and concerns",
      "A curated product recommendation from the Epionce and Hydrinity lines",
      "Guidance on how to layer and sequence your new regimen",
      "Follow-up check-ins to adjust your routine as needed",
    ],
    recovery:
      "There is no downtime associated with a skincare consultation. Some products may require a brief adjustment period as your skin acclimates — Briana will walk you through what to expect.",
    metaTitle: "Medical Grade Skincare in Melissa, TX | Epionce & Hydrinity",
    metaDescription:
      "Personalized medical grade skincare regimens featuring Epionce and Hydrinity in Melissa, TX, curated by Briana, RN.",
  },
};
