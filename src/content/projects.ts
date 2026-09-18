import type { ResponsiveText } from "./types";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  numeral: string;
  name: string;
  kicker: string;
  domain: string;
  url: string;
  lede: string;
  body: ResponsiveText;
  /**
   * Screenshot shown on the project plate. Until one is supplied the plate
   * renders the design's striped placeholder. Put the file in /public/projects
   * and set { src: "/projects/iris.png", alt }. It is cropped to the plate's
   * 4:3 (mobile) or 16:11 (desktop) frame.
   */
  image?: ProjectImage;
}

export const projects: readonly Project[] = [
  {
    numeral: "I",
    name: "Iris",
    kicker: "Research platform",
    domain: "irisbio.org",
    url: "https://irisbio.org/",
    lede: "A place for scientists to find each other.",
    body: {
      compact:
        "Iris is a platform built for the research community — scientists create a presence, describe what they work on, and connect with people working on adjacent problems.",
      full: "Iris is a platform built for the research community — scientists create a presence, describe what they work on, and connect with people working on adjacent problems. It turns a scattered field into something you can search, browse and join.",
    },
  },
  {
    numeral: "II",
    name: "Exam Sessions",
    kicker: "QABA Board",
    domain: "qababoard.com",
    url: "https://qababoard.com/",
    lede: "Board examinations, delivered online.",
    body: {
      compact:
        "Candidates sit scheduled, timed papers in the browser while the board administers sessions, candidates and results from one place.",
      full: "An online examination platform for the QABA board: candidates sit scheduled, timed papers in the browser while the board administers sessions, candidates and results from one place. Everything is built around a sitting that has to stay fair and recoverable from start to finish.",
    },
  },
  {
    numeral: "III",
    name: "Carco UK",
    kicker: "Vehicle marketplace",
    domain: "car.co.uk",
    url: "https://www.car.co.uk/",
    lede: "Buying and selling cars, end to end.",
    body: {
      compact:
        "A UK vehicle marketplace where sellers list stock and buyers browse, compare and enquire — listings, search and the conversations between both sides.",
      full: "A UK vehicle marketplace where sellers list stock and buyers browse, compare and enquire. The product spans the listing lifecycle, search and the conversations between both sides of a sale.",
    },
  },
];
