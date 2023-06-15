import React, { useState } from 'react';

import { ProcessWrapper } from './style';

interface Props {
  title: string;
  text: string;
  // onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ProcessItem = ({ title, text }: Props) => {
  const [openDescription, setOpenDescription] = useState(false);

  return (
    <ProcessWrapper id={`process_${title.toLocaleLowerCase()}`}>
      <h3>{title}</h3>
      <p>{text}</p>
    </ProcessWrapper>
  );
};

export default ProcessItem;
