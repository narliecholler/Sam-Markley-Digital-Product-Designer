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
            <li key={`caseStudy_${i.id}`}>
              <CaseStudy
                title={i.company}
                id={i.id}
                images={i.collection}
                text={i.text}
              />
            </li>
          );
        })}
      </ul>
    </CaseStudySection>
  );
};

export default CSSection;
