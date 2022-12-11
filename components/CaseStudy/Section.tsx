import { CaseStudySection } from "./style";
import CaseStudy from "./CaseStudy";
import { caseStudies } from "./caseStudies";

const CSSection = () => {
  return (
    <CaseStudySection>
      <h3 style={{ color: "#fff", fontSize: "24px", paddingBottom: "1rem" }}>
        Selected Projects
      </h3>
      <ul>
        {caseStudies.map((i) => {
          return (
            <li key={i.id}>
              <CaseStudy
                title={i.company}
                // text={i.text}
                id={i.id}
                // logo={i.logo}
                images={i.collection}
              />
            </li>
          );
        })}
      </ul>
    </CaseStudySection>
  );
};

export default CSSection;
