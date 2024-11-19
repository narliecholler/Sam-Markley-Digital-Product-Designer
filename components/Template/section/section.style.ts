import { styled } from 'styled-components';
import { theme } from '@/theme/theme';

export const Section = styled.section<{ $contrast: boolean }>`
  width: '100%';
  background-color: ${(props) =>
    props.$contrast ? theme.colors.primary : theme.colors.white};
`;

export const SectionInner = styled.div`
  max-width: '114rem';
  margin: 'auto';
  padding: '1rem 1rem';

  /* '@bp1': {
    padding: '3rem 5rem',
  }, */
`;
