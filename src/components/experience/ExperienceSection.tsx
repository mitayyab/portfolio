import { Section } from "@/components/ui/Section";
import { sections } from "@/content/sections";
import { EducationList } from "./EducationList";
import {
  EXPERIENCE_HEADING_ID,
  ExperienceTimeline,
} from "./ExperienceTimeline";

/** Experience and education side by side from lg, stacked on mobile. */
export function ExperienceSection() {
  return (
    <Section
      id={sections.experience.id}
      labelledBy={EXPERIENCE_HEADING_ID}
      containerClassName="pt-7.5 lg:grid lg:grid-cols-[1.3fr_0.7fr] lg:gap-13 lg:py-14.5"
    >
      <ExperienceTimeline />
      <EducationList />
    </Section>
  );
}
