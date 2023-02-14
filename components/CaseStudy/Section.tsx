import { useEffect, useRef } from "react";
import Link from "next/link";
import { CaseStudySection, ProjectsHeading } from "./style";
import CaseStudy from "./CaseStudy";
import { caseStudies } from "./caseStudies";

const CSSection = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("here");
    const onScroll = () => {
      if (typeof window !== "undefined" && projectsRef.current) {
        const scroll = window.scrollY + window.innerHeight / 3;

        // add class if section appears within bottom of scrolling depending on scroll value above.
        if (
          (projectsRef.current.getBoundingClientRect().top <= scroll &&
            projectsRef.current.getBoundingClientRect().top +
              projectsRef.current.getBoundingClientRect().height >
              scroll) ||
          (projectsRef.current.getBoundingClientRect().bottom <= scroll &&
            projectsRef.current.getBoundingClientRect().bottom +
              projectsRef.current.getBoundingClientRect().height <
              scroll)
        ) {
          projectsRef.current.classList.add("color-black");
        }

        // remove class if scroll pass the section.
        if (projectsRef.current.getBoundingClientRect().bottom < 0) {
          projectsRef.current.classList.remove("color-black");
        }
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <CaseStudySection ref={projectsRef}>
      <ProjectsHeading>Selected Projects</ProjectsHeading>
      <ul>
        {caseStudies.map((i) => {
          const { id, company, collection, text } = i;

          return (
            <li key={`caseStudy_${i.id}`}>
              <Link
                href={{
                  pathname: "/portfolio/[company]",
                  query: { company: id },
                }}
                key={`caseStudy_${id}`}
                style={{ textDecoration: "none" }}
              >
                <CaseStudy
                  id={id}
                  title={company}
                  images={collection}
                  text={text}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </CaseStudySection>
  );
};

export default CSSection;
