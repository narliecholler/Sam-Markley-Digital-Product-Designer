import { useState, useEffect } from 'react';
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
} from '@/styles/contact.styles';

const ContactPage = () => {
  const [contactDate, setContactDate] = useState({ time: '', date: '' });

  const refreshDateTime = () =>
    setContactDate({
      time: new Date().toLocaleTimeString([], { timeStyle: 'short' }),
      date: new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(
        new Date(),
      ),
    });

  useEffect(() => {
    const timer = setInterval(refreshDateTime, 1000);

    return () => clearInterval(timer);
  }, []);

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
                <p>{contactDate.time}</p>
                <p>{contactDate.date} (GMT)</p>
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
