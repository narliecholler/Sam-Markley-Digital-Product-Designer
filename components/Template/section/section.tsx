import { ReactNode } from 'react';
import { Section, SectionInner } from './section.style';

type SectionProps = {
  backgroundColor: any; // TODO type to theme.
  children: ReactNode;
};

const SectionContainer = ({ backgroundColor, children }: SectionProps) => (
  <Section backgroundColor={backgroundColor}>
    <SectionInner>{children}</SectionInner>
  </Section>
);

export default SectionContainer;
