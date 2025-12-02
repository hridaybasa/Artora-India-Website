import type {
  HeroContent,
  FounderBio,
  ProcessStep,
  ArtworkItem,
  FAQItem,
  ContactInfo,
  BlogPost,
} from "../types/content";
import heroImage from "../assets/pexels-photo-1839919.jpeg";
import founder1 from "../assets/harshraj.png";
import founder2 from "../assets/hriday.jpg";
import founder3 from "../assets/ronik.png";
import founder4 from "../assets/hrithik.png";
import blog1 from "../assets/download.webp";
import blog2 from "../assets/1746195749924-cover.webp";
import blog3 from "../assets/Decorillas-guide-to-using-art-in-interior-design-1536x861.jpeg";
import artwork1 from "../assets/personas5.jpeg";
import artwork2 from "../assets/dipayan.jpeg";
import artwork3 from "../assets/firdaus.jpeg";
import artwork4 from "../assets/divyaman.jpg";

export const heroContent: HeroContent = {
  backgroundImage: heroImage,
  headline: "Invest in Timeless Beauty",
  subtext:
    "Artoraa India brings together discerning collectors, emerging artists, and timeless masterpieces to create a new era of art investment.",
  ctaButtons: [
    { text: "Explore Art Investment", link: "#investment", primary: true },
    { text: "Connect With Us", link: "#contact", primary: false },
  ],
};

export const whyArtoraaHighlights = [
  {
    title: "Exclusive Network of Collectors & Artists",
    description:
      "Access to a curated network of established and emerging talent worldwide.",
    icon: "users",
  },
  {
    title: "Art as a Wealth-Building Asset",
    description:
      "Transform your portfolio with tangible assets that appreciate over time.",
    icon: "trending-up",
  },
  {
    title: "Tailored Investment Process",
    description:
      "Personalized guidance from acquisition to long-term wealth management.",
    icon: "shield-check",
  },
];

export const founders: FounderBio[] = [
  {
    name: "HarshRaj Vora",
    role: "Co-Founder & CEO",
    photo: founder1,
    bio: "A visionary with a fervent love for art, I merge financial strategy with artistic vision. This unique blend of expertise ensures that our artistic endeavors are not only innovative but also financially robust and sustainable.",
  },
  {
    name: "Hriday Basa",
    role: "Co-Founder & CTO",
    photo: founder2,
    bio: "I oversee company operations, drive efficiency, and manage resources to ensure smooth functioning. My role integrates strategic oversight with hands-on technical skills to support business growth.",
  },
  {
    name: "Ronik Jain",
    role: "Co-Founder & Creative Director",
    photo: founder3,
    bio: "I bring a unique perspective to crafting compelling visual narratives. My expertise lies in blending innovative design with strategic insight to create immersive and impactful experiences.",
  },
  {
    name: "Hrithik Basa",
    role: "Co-Founder & CMO",
    photo: founder4,
    bio: "I spearhead innovative campaigns that drive business growth, foster brand loyalty, and captivate audiences, with a passion for creative storytelling and data-driven insights.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Inquiry",
    description: "We understand your taste, budget, and investment goals.",
    icon: "message-circle",
  },
  {
    title: "Sourcing",
    description:
      "Using our global network, we source artworks that align with your vision and investment criteria.",
    icon: "search",
  },
  {
    title: "Evaluation",
    description:
      "Comprehensive due diligence, provenance checks, and professional authentication ensure integrity.",
    icon: "clipboard-check",
  },
  {
    title: "Acquisition",
    description:
      "Seamless transaction on negotiated price with complete logistical support for a worry-free experience.",
    icon: "handshake",
  },
  {
    title: "Installation",
    description:
      "End-to-end assistance with artwork handling, framing and placement for a seamless installation experience.",
    icon: "heart-handshake",
  },
];

export const investmentComparisons = [
  {
    category: "Art Investment",
    annualReturn: "8-12%",
    volatility: "Low",
    liquidity: "Moderate",
    tangibility: "High",
    culturalValue: "High",
  },
  {
    category: "Stocks",
    annualReturn: "7-10%",
    volatility: "High",
    liquidity: "High",
    tangibility: "None",
    culturalValue: "None",
  },
  {
    category: "Gold",
    annualReturn: "5-7%",
    volatility: "Moderate",
    liquidity: "High",
    tangibility: "High",
    culturalValue: "Low",
  },
  {
    category: "Real Estate",
    annualReturn: "6-9%",
    volatility: "Low",
    liquidity: "Low",
    tangibility: "High",
    culturalValue: "Low",
  },
];

export const ideaArtworks: ArtworkItem[] = [
  {
    id: "1",
    title: "Personas 5",
    artist: "Sushant Surge",
    image: artwork1,
    year: "2024",
    medium: "Acrylic on Canvas",
  },
  {
    id: "2",
    title: "Adhisthana",
    artist: "Dipayan Ghosh",
    image: artwork2,
    year: "2019",
    medium: "Acrylic on Stretched Canvas",
  },
  {
    id: "3",
    title: "Firdaus 2.0",
    artist: "Pavani Nagpal",
    image: artwork3,
    year: "2024",
    medium: "Acrylic on Canvas",
  },
  {
    id: "4",
    title: "EARTH",
    artist: "Divyaman Singh",
    image: artwork4,
    year: "2024",
    medium: "Oil on Canvas",
  },
];

export const faqs: FAQItem[] = [
  {
    question: "How do I invest in art?",
    answer:
      "Investing in art begins with understanding your goals, budget, and aesthetic preferences. At Artoraa India, we guide you through every step—from initial consultation and artwork sourcing to authentication and acquisition. Our process is tailored to both seasoned collectors and first-time investors.",
  },
  {
    question: "What is the minimum budget to start?",
    answer:
      "Art investment is accessible at various levels. We work with budgets ranging from ₹1 lakh for emerging artist works to several crores for established masterpieces. During our initial consultation, we help identify opportunities that align with your financial capacity and investment objectives.",
  },
  {
    question: "How does art appreciate in value?",
    answer:
      "Art appreciation is influenced by factors including artist reputation, rarity, provenance, condition, and market demand. Historical data shows that fine art has outperformed many traditional assets over decades. Our team provides detailed market analysis and valuation forecasts for each acquisition.",
  },
  {
    question: "What is the Artoraa IDEA initiative?",
    answer:
      "IDEA (Interior Designers & Emerging Artists) is our platform connecting talented emerging artists with interior designers and collectors. This initiative creates opportunities for new talent while offering affordable, unique artworks for spaces seeking originality and investment potential.",
  },
  {
    question: "How is artwork authentication handled?",
    answer:
      "We conduct rigorous due diligence including provenance research, condition reports, and authentication by recognized experts. Every artwork comes with complete documentation, certificates of authenticity, and a comprehensive history ensuring its legitimacy and value.",
  },
  {
    question: "Can I sell my art through Artoraa?",
    answer:
      "Yes, we offer discretionary selling services for collectors looking to liquidate or rebalance their portfolios. Our global network ensures competitive valuations and confidential transactions with qualified buyers.",
  },
];

export const contactInfo: ContactInfo = {
  address:
    "601-602, B4 WING, Satellite Classic, Subash Road, Jogeshwari East, Mumbai, Maharashtra 400060, India",
  phone: "+91-8369296752",
  email: "info@artoraindia.com",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.3316079721058!2d72.84772777497899!3d19.136956482080166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7417a262cc5%3A0xa5005d2d6760c5d2!2sSatellite%20Classic!5e0!3m2!1sen!2sin!4v1759834100056!5m2!1sen!2sin",
  socialMedia: {
    instagram: "https://instagram.com/artoraindia",
    linkedin: "https://linkedin.com/company/artoraindia",
    facebook: "https://facebook.com/artoraindia",
    twitter: "https://twitter.com/artoraindia",
  },
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "India’s Art Market Is Thriving—Here’s Why",
    excerpt:
      "It is quite evident that India is at a fascinating point in its art market evolution. Art spaces have been opening up across the country, such as the Nita Mukesh Ambani Cultural Centre (NMACC) in Mumbai, and upcoming Hampi Art Labs in Karnataka, and the Brij Museum in New Delhi.",
    image: blog1,
    date: "2024-02-01",
    slug: "rise-of-contemporary-indian-art",
    url: "https://www.artsy.net/article/artsy-editorial-india-s-art-market-thriving-here-s",
  },
  {
    id: "2",
    title: "Mapping the Rise of the Indian Art Market",
    excerpt:
      "Art has been a part of my consciousness for as long as I can remember. I can recall with vivid clarity how my grandmother used to sit me down and explain the subtle nuances of a Ram Kinkar Baij work.",
    image: blog2,
    date: "2025-05-02",
    slug: "art-investment-strategies-2024",
    url: "https://arttactic.com/editorials/mapping-the-rise-of-the-indian-art-market?uni_match=0&qa=1759830986932",
  },
  {
    id: "3",
    title: "Art in Interior Design: Matching Art to Your Home Style",
    excerpt:
      "Have you ever walked into a room and felt instantly captivated by its ambiance? Perhaps it was the vibrant paintings adorning the walls or the carefully curated sculptures accentuating the space.",
    image: blog3,
    date: "2024-05-31",
    slug: "emerging-artists-spotlight",
    url: "https://www.decorilla.com/online-decorating/art-in-interior-design/",
  },
];
