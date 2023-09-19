import React from 'react';

import { ProcessContainer } from '../work-process.style';

interface Props {
  title: string;
  text: string;
  className: string;
}

const ProcessItem = ({ title, text, className }: Props) => (
  <ProcessContainer
    id={`process_${title.toLocaleLowerCase()}`}
    className={className}
  >
    <h3>{title}</h3>
    <p className="process-description">{text}</p>
  </ProcessContainer>
);

export default ProcessItem;
