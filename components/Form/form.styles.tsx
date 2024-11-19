import { styled } from 'styled-components';
import { theme } from '@/lib/theme/theme';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin-bottom: 16px;
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & label {
    display: flex;
    color: ${theme.colors.primary};
    // line-height: 26px;

    & span {
      font: inherit;
      color: #d3d3d3;
    }
  }

  & span {
    font-size: 12px;
    color: ${theme.colors.error};
  }
`;

export const InputContainer = styled.div`
  position: relative;

  & span {
    position: absolute;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;
    box-shadow: 6px 0px 0px -5px #d3d3d3;

    &#validateIcon {
      top: 0;
      right: 0;
      box-shadow: none;
    }
  }

  & input,
  & textarea {
    width: 100%;
    padding-left: 55px;
    padding-right: 10px;
    background: #f9f9f9;
    color: #1d1d1d;
    font-size: 16px;
    border: 0.5px solid #595959;
    border-radius: 4px;
    height: 40px;

    &.error {
      border-color: ${theme.colors.error};
      border-width: 1px;
    }

    &.valid {
      border-color: ${theme.colors.success};
      border-width: 1px;
    }
  }

  // override default styling for large text area.
  &.formTextArea {
    & textarea {
      resize: none;
      height: unset;
      padding-top: 6px;
    }

    & span {
      height: auto;
    }
  }
`;
