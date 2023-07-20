import { useEffect, useState } from 'react';
import { AnimatedIcon } from '@/components/Icon';
import copy from 'react-useanimations/lib/copy';
import { EmailContactWrapper, ToolTip } from './socials.styles';

const email = 'contact@sammarkley.com';

const EmailContact = () => {
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
    <EmailContactWrapper>
      <a href={`mailto: ${email}`}>{email}</a>
      <div onClick={() => copyToClipboard()}>
        <ToolTip show={showTooltip}>Copied!</ToolTip>
        <AnimatedIcon type={copy} />
      </div>
    </EmailContactWrapper>
  );
};

export default EmailContact;
