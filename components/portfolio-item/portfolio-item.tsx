import React, { forwardRef } from 'react';
import { Wrapper, Content, TitleWrapper, Title } from './portfolio-item.styles';

type PortfolioItemProps = {
  img: any;
  title: string;
  index: number;
  subtitle: string;
  information: string;
};

export const PortfolioItem = forwardRef<HTMLDivElement, PortfolioItemProps>(
  ({ img, title, index, subtitle, information }, ref) => (
    <Wrapper className="content-wrapper" ref={ref}>
      <Content className="content">
        <TitleWrapper className="title-wrap" data-flip-id={`auto-${index + 1}`}>
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
  ),
);

PortfolioItem.displayName = 'PorftolioItem';
