import { styled } from "@/theme/index";
import Process from "@/components/Process";
// @ts-ignore
import Fade from "react-reveal/Fade";
import { useEffect, useRef, useState, MutableRefObject } from "react";

const ProcessSection = styled("section", {
  background:
    "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(116.82deg, #F5F6FE 0%, #FCF0F0 100%)",
  textAlign: "center",
  padding: "100px 20px",

  "& > div:first-child": {
    marginTop: 0,
    marginBottom: 0,
    borderTopRightRadius: "24px",
    borderTopLeftRadius: "24px",
  },

  "& > div:last-child": {
    marginTop: 0,
    marginBottom: 0,
    borderBottomRightRadius: "24px",
    borderBottomLeftRadius: "24px",
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
  const refWrapper = useRef<HTMLDivElement>(null);
  const [locationSet, setLocationSet] = useState();

  const scrollEvent = (event: any) => {
    setLocationSet(event.currentTarget.offsetHeight);
    console.log("offsetHeight: ", event.currentTarget.scrollY);
  };

  useEffect(() => {
    if (refWrapper.current) {
      console.log("refWRapper", refWrapper);
      refWrapper.current.addEventListener("wheel", scrollEvent);
    }

    return () => {
      refWrapper?.current?.removeEventListener("wheel", scrollEvent);
    };
  }, [refWrapper]);

  return (
    <Fade>
      <ProcessSection ref={refWrapper}>
        {processes.map((i, index) => (
          <div key={`${i.text}_${index}`}>
            <Process title={i.title} text={i.text} />
          </div>
        ))}
      </ProcessSection>
    </Fade>
  );
};

export default WorkProcesses;
