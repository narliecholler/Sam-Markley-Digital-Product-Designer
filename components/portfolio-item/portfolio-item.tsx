import React, { useRef } from 'react';
import { Wrapper, Content, TitleWrapper, Title } from './portfolio-item.styles';

type PortfolioItemProps = {
  img: any;
  title: string;
  index: number;
  subtitle: string;
  information: string;
};

export const PortfolioItem = ({
  img,
  title,
  index,
  subtitle,
  information,
}: PortfolioItemProps) => {
  const itemRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Wrapper className="content-wrapper" ref={itemRef}>
        <Content className="content">
          <TitleWrapper
            className="title-wrap"
            data-flip-id={`auto-${index + 1}`}
          >
            <Title className="title-up" up>
              {title}
            </Title>
            <Title className="title-down" down>
              {subtitle}
            </Title>
          </TitleWrapper>
        </Content>
        <Content className="content" layout animation={2}>
          {img()}
          <p className="content-text">{information}</p>
        </Content>
      </Wrapper>
    </>
  );
};
