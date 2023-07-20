import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { ProgressBarWrapper, theme } from './style';

const ProgressBar = ({ value }: { value: number }) => (
  <ProgressBarWrapper>
    <CircularProgressbar
      value={value}
      styles={{
        root: {},
        path: {},
        trail: {
          strokeWidth: 3,
          stroke: theme.colors.black,
        },
      }}
    />
  </ProgressBarWrapper>
);

export default ProgressBar;
