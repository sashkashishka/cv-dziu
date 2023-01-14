import type React from 'react';

interface iBgShapeColorProps extends React.SVGAttributes<HTMLOrSVGElement> {
  gradientId: string;
  renderGradient?: (gradientId: string) => React.ReactNode;
}

export const BgShapeColor2: React.FC<iBgShapeColorProps> = ({
  gradientId,
  renderGradient,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2102"
    height="1998"
    fill="none"
    {...props}
  >
    <path
      fill={`url(#${gradientId})`}
      fillRule="evenodd"
      d="M1054.43 311.077c110.21 20.19 188.95 107.892 283.32 165.788 84.21 51.667 185.09 82.616 245.56 158.696 60.08 75.599 58.33 177.674 92.56 266.72 38.99 101.439 138.61 190.159 124.23 297.319-14.21 105.93-119.22 178.04-198.19 253.83-73.55 70.59-154.09 133.13-248.73 175.11-93.98 41.69-195.37 75.04-298.75 67.75-101.19-7.14-189.328-61.8-278.181-108.47-85.414-44.87-170.778-90.48-234.499-160.84-64.876-71.63-98.91-160.74-136.183-248.44-42.262-99.43-131.251-201.006-98.464-303.634 33.395-104.53 192.37-119.447 261.484-206.639 71.622-90.357 50.616-236.619 144.702-305.792 92.303-67.861 226.646-72.371 341.141-51.398Z"
      clipRule="evenodd"
    />

    <defs>
      {
        renderGradient
          ? renderGradient(gradientId)
          : (
            <linearGradient id={gradientId} x1="1050.76" x2="1050.76" y1="300" y2="1697.29" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3FE8FF" />
              <stop offset="1" stopColor="#52FF00" />
            </linearGradient>
          )
      }
    </defs>
  </svg>
);
