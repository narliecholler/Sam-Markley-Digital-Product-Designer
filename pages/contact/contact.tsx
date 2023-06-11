import Head from 'next/head';
import Socials from '@/components/Socials';
import Form from '@/components/Form';

import {
  ContactWrapper,
  ContactContainer,
  ContactInformation,
  ContactForm,
  MobileMenuSocials,
  DateInformation,
} from './contact.style';

const ContactPage = () => {
  const time = new Date().toLocaleTimeString([], { timeStyle: 'short' });
  const date = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(
    new Date(),
  );

  return (
    <>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Get in contact to find out how I can help you"
        />
      </Head>
      <ContactWrapper>
        <ContactContainer>
          <ContactInformation>
            <h1>
              Lets chat about your <span>ideas</span>
            </h1>
            <MobileMenuSocials>
              <p>contact@sammarkley.com</p>
              <Socials />
            </MobileMenuSocials>
            <DateInformation>
              <div>
                <p>{time}</p>
                <p>{date} (GMT)</p>
                <p>Time in London, UK</p>
              </div>
              <div />
            </DateInformation>
          </ContactInformation>
          <ContactForm>
            <Form />
          </ContactForm>
        </ContactContainer>
      </ContactWrapper>
    </>
  );
};

export default ContactPage;
