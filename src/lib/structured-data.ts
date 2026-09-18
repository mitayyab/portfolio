import { education } from "@/content/education";
import { experience } from "@/content/experience";
import { site } from "@/content/site";
import { skillGroups } from "@/content/skills";
import { getSiteUrl } from "./site-url";

type JsonLd = Record<string, unknown>;

/**
 * schema.org graph for the home page: the site, this profile page and the
 * person it is about. Everything comes from the same content the page renders.
 * Email and phone are left out on purpose; they are on the page for people.
 */
export function buildStructuredData(): JsonLd {
  const url = getSiteUrl();
  const ids = {
    website: `${url}/#website`,
    profilePage: `${url}/#profile`,
    person: `${url}/#person`,
  };

  const currentEmployer = experience.find((entry) => entry.current);
  const highestQualification = education.find((entry) => entry.highlight);

  const person: JsonLd = {
    "@type": "Person",
    "@id": ids.person,
    name: site.name,
    jobTitle: site.role,
    description: site.description,
    url,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressCountry: site.countryCode,
    },
    sameAs: [site.links.linkedin, site.links.github],
    knowsAbout: skillGroups
      .filter((group) => !group.exploring)
      .flatMap((group) => group.items),
  };

  if (currentEmployer) {
    person.worksFor = {
      "@type": "Organization",
      name: currentEmployer.company,
    };
  }
  if (highestQualification) {
    person.alumniOf = {
      "@type": "CollegeOrUniversity",
      name: highestQualification.institution,
    };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": ids.website,
        url,
        name: site.name,
        description: site.description,
        inLanguage: "en",
        publisher: { "@id": ids.person },
      },
      {
        "@type": "ProfilePage",
        "@id": ids.profilePage,
        url,
        name: site.title,
        description: site.description,
        inLanguage: "en",
        isPartOf: { "@id": ids.website },
        about: { "@id": ids.person },
        mainEntity: { "@id": ids.person },
      },
      person,
    ],
  };
}
