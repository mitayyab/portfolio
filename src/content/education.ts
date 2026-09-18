interface EducationEntry {
  qualification: string;
  institution: string;
  /** Shown after the institution when the design gives one. */
  location?: string;
  years: string;
  /** The highest qualification gets the gold rule and gold years. */
  highlight?: boolean;
}

export const education: readonly EducationEntry[] = [
  {
    qualification: "BS Computer Science",
    institution: "FAST NUCES",
    location: "Lahore",
    years: "2019 — 2023",
    highlight: true,
  },
  {
    qualification: "GCE A Levels",
    institution: "Divisional Model College",
    years: "2017 — 2019",
  },
  {
    qualification: "GCE O Levels",
    institution: "Divisional Model College",
    years: "2015 — 2017",
  },
];
