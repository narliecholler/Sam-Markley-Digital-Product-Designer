import { styled } from "@/theme/index";
import Process from "@/components/Process";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { transform } from "typescript";

const ProcessSection = styled("section", {
  display: "block",
  minHeight: "200vh",
  background: "purple",
  position: "relative",

  "&.cardswipe": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    "& h3": {
      marginBottom: "200px",
    },
  },
  "& .card": {
    display: "flex",
    gap: "8rem",
    justifyContent: "center",
    flexDirection: "column",
    maxWidth: "600px",
    width: "600px",
    margin: "0.5rem",
    backgroundColor: "red",
    // opacity: 0,
    marginBottom: "50px",
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
    const cards = gsap.utils.toArray(".cards") as Element[];

    cards.forEach((card, index) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: () => `top bottom-=100`,
          end: () => `top top+=40`,
          scrub: true,
          markers: true,
          invalidateOnRefresh: true,
        },
        ease: "none",
        opacity: 1,
        scale: () => 1 - (cards.length - index) * 0.025,
      });

      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        pin: true,
        pinSpacing: false,
        markers: true,
        id: "pin",
        end: "max",
        invalidateOnRefresh: true,
      });
    });
  }, []);

  return (
    <>
      <ProcessSection ref={stackRef} className="cardswipe">
        <h3 className="heading">Working Process</h3>
        {processes.map((i, index) => (
          <div
            key={`${i.text}_${index}`}
            className="cards"
            // style={{ top: `calc${index} * 0.2)` }}
          >
            <Process
              key={`${i.text}_${index}`}
              title={i.title}
              text={i.text}
              className="card"
            />
          </div>
        ))}
      </ProcessSection>
    </>
  );
};

export default WorkProcesses;
