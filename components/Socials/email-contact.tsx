import { useEffect, useState } from 'react';
import { AnimatedIcon } from '@/components/icon';
import copy from 'react-useanimations/lib/copy';
import { EmailContactWrapper, ToolTip } from './socials.styles';

const email = 'contact@sammarkley.com';

const EmailContact = ({
  iconColor = 'black',
}: {
  iconColor: 'white' | 'black';
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 3000);

    return () => clearInterval(timer);
  }, [showTooltip]);

  const copyToClipboard = () => {
    if ('clipboard' in navigator) {
      setShowTooltip(true);
      return navigator.clipboard.writeText(email);
    }

    return null;
  };

  return (
    <EmailContactWrapper color={iconColor}>
      <a href={`mailto: ${email}`}>{email}</a>
      <div onClick={() => copyToClipboard()}>
        <ToolTip show={showTooltip}>Copied!</ToolTip>
        <AnimatedIcon type={copy} stroke={iconColor} />
      </div>
    </EmailContactWrapper>
  );
};

export default EmailContact;
