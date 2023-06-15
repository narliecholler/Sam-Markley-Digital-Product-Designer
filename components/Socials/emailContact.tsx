import { AnimatedIcon } from '@/components/Icon';
import copy from 'react-useanimations/lib/copy';
import { EmailContactWrapper } from './socials.styles';

const EmailContact = () => (
  <EmailContactWrapper>
    <a href="mailto: contact@sammarkley.com">contact@sammarkley.com</a>
    <div>
      <AnimatedIcon type={copy} />
    </div>
  </EmailContactWrapper>
);

export default EmailContact;
