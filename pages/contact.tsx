import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Socials, EmailContact } from '@/components/socials';
import Form from '@/components/form';
import { SectionContainer } from '@/components/template';
import {
  Contact,
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
    refreshDateTime();

    const timer = setInterval(refreshDateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Contact>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Get in contact to find out how I can help you"
        />
      </Head>
      <SectionContainer background-color="black">
        <ContactWrapper>
          <ContactContainer>
            <ContactInformation>
              <h1>
                Lets chat about your <span>ideas</span>
              </h1>
              <MobileMenuSocials>
                <EmailContact iconColor="black" />
                <Socials contrast={true} />
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
      </SectionContainer>
    </Contact>
  );
};

export default ContactPage;
