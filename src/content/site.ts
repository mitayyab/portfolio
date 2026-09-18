const CITY = "Lahore";
const COUNTRY_CODE = "PK";

/** Facts about the site owner. Everything here comes from the design handoff. */
export const site = {
  name: "Muhammad Ibrahim Tayyab",
  shortName: "M. Ibrahim Tayyab",
  role: "Full-stack engineer",
  description:
    "Full-stack engineer in Lahore building web applications from UI to database — React, Next.js, Node, Nest.js and PostgreSQL. Open to remote work.",
  city: CITY,
  countryCode: COUNTRY_CODE,
  locationLabel: `${CITY}, ${COUNTRY_CODE}`,
  timezone: "GMT+5",
  email: "ibrahimtayyab127@gmail.com",
  phone: { label: "0303 917 5992", href: "tel:+923039175992" },
  links: {
    linkedin: "https://www.linkedin.com/in/muhammad-ibrahim-tayyab",
    github: "https://github.com/mitayyab",
    /** Drop the PDF into /public under this name; the buttons already point at it. */
    resume: "/ibrahim-tayyab-cv.pdf",
  },
} as const;
