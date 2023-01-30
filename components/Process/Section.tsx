import { styled } from "@/theme/index";
import Process from "@/components/Process";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";
import { useEffect, useLayoutEffect, useRef } from "react";
import { transform } from "typescript";

const ProcessSection = styled("section", {
  height: "500vh",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "column",
  paddingTop: "150px",
  gap: "5rem",
  zIndex: 0,

  "& .container1": {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -10,
    background:
      "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(116.82deg, #F5F6FE 0%, #FCF0F0 100%)",
  },

  "& .heading": {
    fontSize: "3rem",
    fontFamily: "ABCWhyteInktrap Bold",
    opacity: 0,
    width: "100%",
    textAlign: "center",
    position: "relative",
  },

  "& .wrapper": {
    zIndex: 20,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "100vh",
    padding: "2rem 0",
    margin: "0",
    marginTop: "400px",
  },

  "& .cards": {
    position: "relative",
    height: "auto",
    top: "7rem",
    minHeight: "200px",
    width: "90vw",
    marginBottom: "50px",
    fontSize: "36px",
    opacity: 1,

    "@bp1": {
      width: "600px",
    },

    "&:first-child": {
      "& > div": {
        boxShadow: "0px 0px 30px 3px rgba(0, 0, 0, 0.05)",
        borderRadius: "24px 24px 0px 0px",
      },
    },

    "&:last-child": {
      "& > div": {
        borderRadius: "0px 0px 24px 24px",
        boxShadow: "0px 30px 30px 3px rgba(0, 0, 0, 0.05)",
      },
    },
  },
});

const processes = [
  {
    title: "Immersion",
    text: "Going deep into client’s business to understand its core sense, goals and challenges to build partnership.",
  },
  {
    title: "Strategise",
    text: "Our planning process turns research into a clear set of action items to meet business goals. ",
  },
  {
    title: "Wireframe",
    text: "Building the foundation, structure and core elements of a digital product.",
  },
  {
    title: "Design",
    text: "Adding colors, illustrations and shapes to create visual language that resonates with customers.",
  },
  {
    title: "Launch",
    text: "During the Implementation, the job is to translate creative into a full program that goes live.",
  },
  {
    title: "Evolve",
    text: "Use scientific metrics to track and analyze performance. This helps us identify what worked and what did not, we then initiate new strategies to maximize your business goals.",
  },
];

const WorkProcesses = () => {
  const headingRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline();

    gsap.set(".cards", { position: "absolute" });

    timeline.from(".cards", {
      top: 500,
      stagger: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top 15%",
        end: "4000px",
        scrub: 2,
        pin: true,
      },
    });
    timeline.from(".container1", {
      top: 0,
      left: 0,
      scrollTrigger: {
        trigger: ".processes",
        start: "top-=6000px",
        end: "bottom",
        pin: ".wrapper",
        scrub: 2,
      },
    });
  }, []);

  return (
    <ProcessSection className="processes">
      {/* <h3 className="heading" ref={headingRef}>
        Working Process
      </h3> */}
      <div className="wrapper">
        {processes.map((i, index) => (
          <div
            key={`${i.text}_${index}`}
            className="cards"
            style={{ top: `${(index + 1) * 5}rem` }}
          >
            <Process
              key={`${i.text}_${index}`}
              title={i.title}
              text={i.text}
              className="card"
            />
          </div>
        ))}
      </div>
      <div className="container1"></div>
    </ProcessSection>
  );
};

export default WorkProcesses;
