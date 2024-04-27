import React from 'react';
import UseAnimations from 'react-useanimations';
import mail from 'react-useanimations/lib/mail';
import type * as Stitches from '@stitches/react';
import { Icon } from '@/components/icon';
import { ButtonWrapper, IconWrapper } from './button.styles';

type CSSButtonVariants = Stitches.VariantProps<typeof ButtonWrapper>;
interface ButtonProps extends React.HTMLProps<HTMLAnchorElement> {
  text: string;
  stroke: CSSButtonVariants['color'];
  icon?: 'mail' | 'send';
  fullWidth?: boolean;
}

const Button = ({
  text,
  stroke,
  icon = 'mail',
  fullWidth = false,
  ...props
}: ButtonProps) => {
  // button without library icon.
  if (icon === 'send') {
    return (
      // @ts-ignore
      <ButtonWrapper
        type="button"
        // investigate stitches error when spreading props.
        // @ts-ignore
        color={stroke}
        fullWidth={fullWidth}
        href="/contact"
        {...props}
      >
        <Icon type="send" />
        <p>{text}</p>
      </ButtonWrapper>
    );
  }

  // button with animated library icons.
  return (
    <UseAnimations
      animation={mail}
      size={32}
      render={(eventProps, animationProps) => (
        <ButtonWrapper
          href="/contact"
          type="button"
          color={stroke}
          fullWidth={fullWidth}
          {...eventProps}
          {...props}
        >
          <IconWrapper {...animationProps} />
          <p>{text}</p>
        </ButtonWrapper>
      )}
    />
  );
};

export default Button;
