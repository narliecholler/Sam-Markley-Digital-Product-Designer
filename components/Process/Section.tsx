import { styled } from "@/theme/index";
import Process from "@/components/Process";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  useEffect,
  useRef,
  useState,
  MutableRefObject,
  useLayoutEffect,
} from "react";
import { transform } from "typescript";

const ProcessSection = styled("section", {
  display: "block",
  // minHeight: "600vh",
  // paddingBottom: "0px",
  background: "purple",
  position: "relative",

  // "& .cards": {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   flexDirection: "column",
  //   marginTop: "50px",
  //   position: "relative",
  // },

  "& .card": {
    // position: "sticky",
    top: "150px",
    height: "200px",
    width: "400px",
    marginBottom: "50px",
    background: "white",
    fontSize: "36px",
    // opacity: 0,

    "&:first-child": {
      boxShadow: "0px 0px 30px 3px rgba(0, 0, 0, 0.05)",
    },
  },

  // "& .test": {
  //   height: "100vh",
  //   position: "sticky",
  //   top: 0,
  // },

  // "& .container2": {
  //   marginTop: "40px",
  //   width: "100%",
  //   height: "400px",
  //   borderTop: "1px solid red",
  // },

  "& h3": {
    // opacity: 0,
    fontSize: "3rem",
  },

  // "& .inner": {
  //   height: "100vh",
  //   position: "sticky",
  //   top: "20%",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },

  "& .container": {
    position: "absolute",
    width: "100%",
    left: "0%",
    top: "10%",
    right: "0%",
    bottom: "0%",
    display: "block",
    marginTop: "-11vh",
    marginBottom: "200px",
    textAlign: "center",
  },

  // "& .container2": {
  //   marginTop: "40px",
  //   width: "100%",
  //   height: "400px",
  // },

  // "& .card": {
  //   opacity: 0,
  //   marginBottom: "20px",
  // },

  // "& h3": {
  //   marginBottom: "80vh",
  // },
  // display: "block",
  // height: "600vh",
  // paddingBottom: "0px",
  // "& .block1": {
  //   position: "sticky",
  //   height: "100vh",
  //   top: 0,
  //   display: "flex",
  //   overflow: "hidden",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   "& .innerblock1": {
  //     position: "absolute",
  //     left: 0,
  //     top: "35%",
  //     right: 0,
  //     bottom: "0%",
  //     display: "block",
  //     textAlign: "center",
  //     marginBottom: "200px",
  //     marginTop: "11vh",
  //   },
  // },
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
gsap.registerPlugin(ScrollTrigger);

const distributor = gsap.utils.distribute({ base: 0.8, amount: 0.2 });

const WorkProcesses = () => {
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".card") as Element[];

    cards.forEach((card, index) => {
      const scaleVal = distributor(index, cards[index], cards);

      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: `top top`,
          scrub: true,
          markers: true,
          invalidateOnRefresh: true,
          once: true,
        },
        opacity: 1,
        ease: "none",
        scale: scaleVal,
      });

      ScrollTrigger.create({
        trigger: card,
        start: `top-=${index * 20} top`,
        endTrigger: ".cards",
        end: `bottom top+=${200 + cards.length * 20}`,
        pin: true,
        pinSpacing: false,
        markers: true,
        id: "pin",
        invalidateOnRefresh: true,
      });
    });
  }, []);

  return (
    <>
      <ProcessSection ref={stackRef} className="cardswipe">
        <div className="inner">
          <div className="container">
            <h3 className="heading">Working Process</h3>
            {processes.map((i, index) => (
              <div key={`${i.text}_${index}`} className="card">
                <Process
                  key={`${i.text}_${index}`}
                  title={i.title}
                  text={i.text}
                  className="card"
                />
              </div>
            ))}
          </div>
          <div className="container2"></div>
        </div>
      </ProcessSection>
    </>
  );
};

export default WorkProcesses;
