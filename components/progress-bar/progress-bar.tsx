import 'react-circular-progressbar/dist/styles.css';
import { FractionWrapper } from './progress-bar.style';

const ProgressBar = ({ percentage = 0, numberActive = 1 }) => {
  const size = 80;
  const radius = (size - 5) / 2;
  const circumference = radius * Math.PI * 2;
  const dash = (percentage * circumference) / 100;

  return (
    <>
      <FractionWrapper>
        <p>{numberActive}</p>
        <span></span>
        <p>6</p>
      </FractionWrapper>
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        style={{ overflow: 'visible' }}
      >
        <circle
          style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.53) inset' }}
          fill="none"
          stroke="#263E58"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth="8px"
        />
        <circle
          fill="none"
          stroke="url(#gradient)"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth="8px"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          // @ts-ignore
          strokeDasharray={[dash, circumference - dash]}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop stopColor="#AF8DFF" />
            <stop offset="0.505208" stopColor="#91C7E1" />
            <stop offset="1" stopColor="#FF9999" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default ProgressBar;
