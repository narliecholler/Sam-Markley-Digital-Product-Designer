import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({ percentage = 0 }: { percentage: number }) => {
  const size = 80;
  const radius = (size - 5) / 2;
  const circumference = radius * Math.PI * 2;
  const dash = (percentage * circumference) / 100;

  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      style={{ overflow: 'visible' }}
    >
      <circle
        fill="none"
        stroke="#000000"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth="1px"
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
          <stop stop-color="#B08DFF" />
          <stop offset="0.505208" stop-color="#91C7E1" />
          <stop offset="1" stop-color="#FF9999" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ProgressBar;
