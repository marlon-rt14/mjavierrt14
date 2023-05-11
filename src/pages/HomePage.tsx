import {SectionAbout} from "./sections/SectionAbout";
import {SectionPropjects} from "./sections/SectionProjects";
import {SectionSkills} from "./sections/SectionSkills";

export const HomePage = () => {
  return (
    <>
      <SectionAbout />
      <SectionSkills />
      <SectionPropjects />
    </>
  );
};
