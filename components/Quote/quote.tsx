import { QuoteWrapper, QuoteHeader, QuoteFooter } from './quote.style';

type Person = {
  name: string;
  details: string;
};

type QuoteDetails = {
  title: string;
  subtitle: string;
};

type QuoteProps = {
  person: Person;
  quote: QuoteDetails;
};

const Quote = ({ quote, person }: QuoteProps) => (
  <QuoteWrapper>
    <QuoteHeader>
      <span>&quot;</span>
      <p>{quote.title}</p>
      <p>{quote.subtitle}&quot;</p>
    </QuoteHeader>
    <QuoteFooter>
      <p>{person.name}</p>
      <p>{person.details}</p>
    </QuoteFooter>
  </QuoteWrapper>
);

export default Quote;