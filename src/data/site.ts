export const site = {
  name: "Govt. Industrial Training Institute, Summerkot",
  shortName: "ITI Summerkot",
  tagline: "Department of Technical Education, Vocational & Industrial Training",
  address: "Summerkot, Distt. Shimla (H.P) - 171124",
  phone: "+91 94184 88916",
  phoneHref: "+919418488916",
  altPhone: "01782-292805",
  altPhoneHref: "01782292805",
  email: "itisummerkot@gmail.com",
  established: "03/01/2017",
  dgetCode: "GR02000299",
  mapQuery: "Govt ITI Summerkot, Shimla, Himachal Pradesh 171124",
  prospectusUrl:
    "https://www.hptechboard.com/storage/files/1/1st%20folder%20for%20PAT%20LEET_2026/ITI_Prospectus_2026.pdf",
  social: {
    facebook: "#",
    twitter: "#",
    youtube: "#",
    linkedin: "#",
  },
};

export type NavChild = { label: string; href: string; external?: boolean };
export type NavItem = { label: string; href?: string; children?: NavChild[] };

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Institute",
    children: [
      { label: "About Institute", href: "/about-institute/" },
      { label: "Electric Power Supply", href: "/electric-power-supply/" },
      { label: "Key Performance Indicators", href: "/key-performance-indicators/" },
      { label: "Institute Amenities", href: "/institute-amenities/" },
      { label: "Institute Infrastructure", href: "/institute-infrastructure/" },
    ],
  },
  {
    label: "Trades",
    children: [
      { label: "Admission Criteria", href: "/admission-criteria/" },
      { label: "Trades Affiliated to NCVT", href: "/trades-affiliated-to-ncvt/" },
      { label: "Overall Results", href: "/overall-results/" },
      { label: "Training Hours Across Course Elements", href: "/training-hours-across-various-course-elements/" },
      { label: "Trade Wise Infrastructure Details", href: "/trade-wise-infrastructure-details/" },
      { label: "Placements", href: "/placements/" },
    ],
  },
  {
    label: "Administration",
    children: [
      { label: "Administrative Staff", href: "/admission-staff/" },
      { label: "Technical Staff", href: "/technical-staff/" },
      { label: "Right to Information", href: "/right-to-information/" },
    ],
  },
  {
    label: "Schemes",
    children: [
      { label: "Apprenticeship Training Schemes", href: "/apprenticeship-training-schemes/" },
      { label: "Craftsman Training Schemes", href: "/craftsman-training-schemes/" },
      { label: "Training Details", href: "/training-details/" },
      { label: "On Job Training", href: "/on-job-training/" },
    ],
  },
  { label: "Downloads", href: "/downloads/" },
  { label: "Tenders", href: "/tenders/" },
  {
    label: "Other Links",
    children: [
      { label: "Admission / OLA Portal", href: "https://www.hptechboard.com/", external: true },
      { label: "Apprenticeship Training Portal", href: "https://www.apprenticeshipindia.gov.in/", external: true },
      { label: "DGET MIS / NCVT MIS Portal", href: "https://ncvtmis.gov.in/pages/home.aspx", external: true },
      { label: "Ministry of Skill Development & Entrepreneurship", href: "https://www.msde.gov.in/", external: true },
      { label: "National Apprenticeship Promotion Scheme (NAPS)", href: "https://msde.gov.in/en/schemes-initiatives/apprenticeship-training/naps", external: true },
    ],
  },
  { label: "Contact Us", href: "/contact-us/" },
];

export const quickLinks: NavChild[] = [
  { label: "About Institute", href: "/about-institute/" },
  { label: "Institute Amenities", href: "/institute-amenities/" },
  { label: "Admission Criteria", href: "/admission-criteria/" },
  { label: "Trades Affiliated to NCVT", href: "/trades-affiliated-to-ncvt/" },
  { label: "Administrative Staff", href: "/admission-staff/" },
  { label: "Right to Information", href: "/right-to-information/" },
  { label: "Downloads", href: "/downloads/" },
  { label: "Tenders", href: "/tenders/" },
  { label: "Screen Reader Access", href: "/screen-reader-access/" },
  { label: "Sitemap", href: "/sitemap/" },
];

export const otherLinks: NavChild[] = [
  { label: "Admission / OLA Portal", href: "https://www.hptechboard.com/", external: true },
  { label: "Apprenticeship Training Portal", href: "https://www.apprenticeshipindia.gov.in/", external: true },
  { label: "DGET MIS / NCVT MIS Portal", href: "https://ncvtmis.gov.in/pages/home.aspx", external: true },
  { label: "Ministry of Skill Development & Entrepreneurship", href: "https://www.msde.gov.in/", external: true },
  { label: "National Apprenticeship Promotion Scheme (NAPS)", href: "https://msde.gov.in/en/schemes-initiatives/apprenticeship-training/naps", external: true },
];

export const trades = [
  {
    name: "Electrician",
    code: "DGT/1001",
    duration: "2 Years",
    eligibility: "10th Pass",
    icon: "bolt",
    description:
      "Installation, maintenance and repair of electrical systems — wiring, safety, appliances and industrial machinery.",
  },
  {
    name: "Computer Operator & Programming Assistant (COPA)",
    code: "DGT/1003",
    duration: "1 Year",
    eligibility: "10th Pass",
    icon: "chip",
    description:
      "Computer operations, data entry, office software and the fundamentals of programming and program logic.",
  },
];
