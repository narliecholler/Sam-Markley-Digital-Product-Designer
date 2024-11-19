import { styled } from 'styled-components';

export const PillarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  width: 352px;
  height: 320px;
  padding: 46px 32px;
  border-radius: 8px;

  h3 {
    font-size: 32px;
    line-height: 41px;
  }

  p {
    font-size: 24px;
    line-height: 29px;
    color: #5b5765;
    text-align: left;
  }
`;
