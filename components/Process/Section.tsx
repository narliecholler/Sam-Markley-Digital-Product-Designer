import { styled } from "@/theme/index";
import Process from "@/components/Process";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";
import { useEffect, useRef } from "react";
import { transform } from "typescript";

const ProcessSection = styled("section", {
  height: "5300px",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "column",
  paddingTop: "150px",
  gap: "5rem",
  background:
    "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(116.82deg, #F5F6FE 0%, #FCF0F0 100%)",

  "& .heading": {
    fontSize: "3rem",
    fontFamily: "ABCWhyteInktrap Bold",
    opacity: 1,
    width: "100%",
    // margin: "auto",
    textAlign: "center",
    position: "relative",
    paddingBottom: "100px",
  },

  "& .wrapper": {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "100vh",
    padding: "2rem 0",
    margin: "0",
    top: "200px",
  },

  "& .cards": {
    position: "relative",
    height: "auto",
    top: "7rem",
    minHeight: "200px",
    width: "600px",
    marginBottom: "50px",
    fontSize: "36px",
    opacity: 1,

    "&:first-child": {
      "& > div": {
        boxShadow: "0px 0px 30px 3px rgba(0, 0, 0, 0.05)",
        borderRadius: "24px 24px 0px 0px",
      },
    },

    "&:last-child": {
      "& > div": {
        boxShadow: "0px 0px 30px 3px rgba(0, 0, 0, 0.05)",
        borderRadius: "0px 0px 24px 24px",
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
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline();

    gsap.set(".cards", { position: "absolute" });

    gsap.to(".heading", {
      yPercent: -50,
      // opacity: 1,
      // stagger: 0.5,
      scale: 0.5,
      scrollTrigger: {
        trigger: ".test",
        markers: true,
        start: "top 2%",
        end: "bottom",
        scrub: true,
        pin: true,
      },
    });

    gsap.from(".cards", {
      yPercent: 10,
      stagger: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".wrapper",
        markers: true,
        start: "top 10%",
        end: "4000px",
        scrub: true,
        pin: true,
      },
    });
  }, []);

  return (
    <ProcessSection className="test">
      {/* <div className="heading_wrapper"> */}
      <h3 className="heading">Working Process</h3>
      {/* </div> */}
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
    </ProcessSection>
  );
};

export default WorkProcesses;
