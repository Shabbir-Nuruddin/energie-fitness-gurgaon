import "@fontsource/bebas-neue/400.css";
import type { Site } from "./lib";

const SPLIT: [number, number][] = [[6, 13], [17, 22]];

export const SITE: Site = {
  name: "Energie Fitness",
  sub: { en: "Gym, yoga & Zumba · Sector 95, Gurugram", hi: "जिम, योग और ज़ुम्बा · सेक्टर 95, गुरुग्राम" },
  banner: { en: "Gym, yoga and Zumba in one place: WhatsApp to plan your first visit", hi: "जिम, योग और ज़ुम्बा एक ही जगह: पहली विज़िट के लिए व्हाट्सऐप करें" },
  phone: "917800372003",
  phoneDisplay: "+91 78003 72003",
  lat: 28.4185435,
  lon: 76.9178581,
  hours: [[[10, 13]], SPLIT, SPLIT, SPLIT, SPLIT, SPLIT, SPLIT],
  theme: {
    dark: true,
    bg: "#100b0c",
    bg2: "#181012",
    panel: "#1f1517",
    ink: "#f6eeee",
    ink2: "#cbbdbd",
    ink3: "#8f7e80",
    line: "#2e2023",
    accent: "#ff3b3b",
    onAccent: "#2a0000",
    display: "Bebas Neue",
    weight: 400,
    upper: true,
  },
  scene: "plates",
  align: "left",
  hero: {
    title: [
      { en: "Gym, yoga, Zumba.", hi: "जिम, योग, ज़ुम्बा।" },
      { en: "All in Sector 95.", hi: "सब सेक्टर 95 में।" },
    ],
    proof: {
      en: "4.8 on Google from 107 reviews. Modern machines, yoga and Zumba classes, and owner Umesh, who is also the main trainer.",
      hi: "गूगल पर 107 रिव्यू से 4.8। मॉडर्न मशीनें, योग और ज़ुम्बा क्लास, और मालिक उमेश, जो ख़ुद मेन ट्रेनर भी हैं।",
    },
    fallback: "/img/p1.jpg",
  },
  marquee: ["Strength", "Cardio", "Yoga", "Zumba", "Personal training", "Fat loss", "Two floors", "First-timers welcome"],
  dishes: {
    title: { en: "What members come for", hi: "मेंबर किसलिए आते हैं" },
    body: { en: "Every line is quoted from a Google review.", hi: "हर लाइन गूगल रिव्यू से ली गई है।" },
    layout: "cards",
    items: [
      { name: { en: "Machines", hi: "मशीनें" }, quote: "The gym is equipped with modern and advanced machines that are also specific to certain body parts.", img: "/img/p1.jpg" },
      { name: { en: "Yoga", hi: "योग" }, quote: "Their yoga sessions help improve flexibility and calm the mind", img: "/img/p4.jpg" },
      { name: { en: "Zumba", hi: "ज़ुम्बा" }, quote: "their Zumba classes are full of energy and make fitness feel like a celebration.", img: "/img/p11.jpg" },
      { name: { en: "All three together", hi: "तीनों एक साथ" }, quote: "With Gym + Yoga + Zumba, it's a complete health solution." },
      { name: { en: "First-timers", hi: "पहली बार जिम" }, quote: "This was the very first time, i decided to join gym, but as a newcomer I was very nervous. But the gym environment n people were very good and helpful." },
      { name: { en: "New parents", hi: "नए माता-पिता" }, quote: "Started my fitness journey with my 1-year-old and I'm loving it!" },
    ],
  },
  gallery: {
    title: { en: "Inside Energie", hi: "एनर्जी के अंदर" },
    layout: "mosaic",
    photos: [
      { src: "/img/p1.jpg", alt: "Main training floor at Energie Fitness", wide: true },
      { src: "/img/p5.jpg", alt: "Cardio machines by the red word wall" },
      { src: "/img/p9.jpg", alt: "Yoga session" },
      { src: "/img/p4.jpg", alt: "Yoga class on the studio floor", wide: true },
      { src: "/img/p13.jpg", alt: "Group class" },
      { src: "/img/p3.jpg", alt: "Members training with equipment" },
    ],
  },
  feature: {
    kind: "hosts",
    title: { en: "Umesh and Shalini run the floor", hi: "उमेश और शालिनी ख़ुद संभालते हैं" },
    body: { en: "Owner-trainer Umesh on the gym floor, Shalini and Umesh leading yoga and Zumba.", hi: "जिम फ़्लोर पर मालिक-ट्रेनर उमेश, योग और ज़ुम्बा में शालिनी और उमेश।" },
    img: "/img/p6.jpg",
    hosts: [
      { name: "UMESH", quote: "What truly sets it apart is the owner Umesh, who is also the main trainer—highly experienced and dedicated." },
      { name: "SHALINI & UMESH", quote: "Shalini and Umesh are both highly experienced and genuinely care about every client’s progress." },
      { name: "UMESH", quote: "Umesh himself is always around, making sure everything runs smoothly and motivating everyone to push harder." },
    ],
  },
  reviews: {
    title: { en: "A community, not just a gym", hi: "सिर्फ़ जिम नहीं, एक परिवार" },
    rating: 4.8,
    dist: [99, 3, 0, 1, 4],
    quotes: [
      { quote: "I lost 10 kgs in almost 2 months despite my busy schedule and unavailability.", stars: 5 },
      { quote: "This is not just a gym but a complete fitness community.", stars: 5 },
      { quote: "The highlight of the gym is their complementary yoga and zumba classes. Highly recommended.", stars: 5 },
      { quote: "the facilities are always spotless, which says a lot about how serious Umesh is about providing a great experience.", stars: 5 },
    ],
  },
  visit: {
    title: { en: "Opposite Shanti Vihar, Sector 95", hi: "शांति विहार के सामने, सेक्टर 95" },
    img: "/img/p10.jpg",
    alt: "Cardio area at Energie Fitness",
    address: { en: "Building No. 362/5, opposite Shanti Vihar, Sector 95, Gurugram", hi: "बिल्डिंग नं. 362/5, शांति विहार के सामने, सेक्टर 95, गुरुग्राम" },
    note: { en: "Morning and evening batches Monday to Saturday, Sunday mornings 10 to 1.", hi: "सोमवार से शनिवार सुबह और शाम के बैच, रविवार सुबह 10 से 1।" },
  },
  story: [
    { kicker: { en: "Results", hi: "नतीजे" }, title: { en: "Ten kilos, around a busy job.", hi: "बिज़ी काम के साथ दस किलो कम।" }, quote: "I lost 10 kgs in almost 2 months despite my busy schedule and unavailability." },
    { kicker: { en: "Classes", hi: "क्लास" }, title: { en: "Yoga and Zumba, not just weights.", hi: "सिर्फ़ वज़न नहीं, योग और ज़ुम्बा भी।" }, quote: "With Gym + Yoga + Zumba, it's a complete health solution." },
    { kicker: { en: "First day", hi: "पहला दिन" }, title: { en: "Nervous on day one? Most were.", hi: "पहले दिन घबराहट? सबको होती है।" }, quote: "as a newcomer I was very nervous. But the gym environment n people were very good and helpful." },
  ],
  build: {
    title: { en: "Plan your first visit", hi: "अपनी पहली विज़िट प्लान करें" },
    body: { en: "Pick a goal and a batch. It goes to WhatsApp exactly as you see it.", hi: "लक्ष्य और बैच चुनें। मैसेज व्हाट्सऐप पर ठीक ऐसे ही जाएगा।" },
    pick: { label: { en: "Goal", hi: "लक्ष्य" }, options: [
      { name: { en: "Weight loss", hi: "वज़न कम करना" } },
      { name: { en: "Strength & muscle", hi: "ताक़त और मसल" } },
      { name: { en: "Yoga", hi: "योग" } },
      { name: { en: "Zumba", hi: "ज़ुम्बा" } },
    ] },
    when: true,
    hello: { en: "Hi Energie Fitness, I'd like to visit:", hi: "नमस्ते एनर्जी फ़िटनेस, मुझे विज़िट करनी है:" },
  },
  waHello: {
    en: "Hi Energie Fitness, I'd like to know about joining. Goal: , batch (morning/evening): ",
    hi: "नमस्ते एनर्जी फ़िटनेस, मुझे जॉइन करने के बारे में जानना है। लक्ष्य: , बैच (सुबह/शाम): ",
  },
  order: ["dishes", "feature", "build", "reviews", "gallery", "visit"],
};
