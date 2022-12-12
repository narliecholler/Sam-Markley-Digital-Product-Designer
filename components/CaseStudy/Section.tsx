import { CaseStudySection } from "./style";
import CaseStudy from "./CaseStudy";
import { caseStudies } from "./caseStudies";
// @ts-ignore
import Fade from "react-reveal/Fade";

const CSSection = () => {
  return (
    <Fade>
      <CaseStudySection>
        <h3 style={{ color: "#fff", fontSize: "24px", paddingBottom: "1rem" }}>
          Selected Projects
        </h3>
        <ul>
          {caseStudies.map((i) => {
            return (
              <li key={i.id}>
                <CaseStudy title={i.company} id={i.id} images={i.collection} />
              </li>
            );
          })}
        </ul>
      </CaseStudySection>
    </Fade>
  );
};

export default CSSection;
