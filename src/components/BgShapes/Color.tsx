import type React from 'react';

interface iBgShapeColorProps extends React.SVGAttributes<HTMLOrSVGElement> {
  gradientId: string;
  renderGradient?: (gradientId: string) => React.ReactNode;
  renderPath?: (fill: string) => React.ReactNode;
}

export const BgShapeColor: React.FC<iBgShapeColorProps> = ({
  gradientId,
  renderGradient,
  renderPath,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1214"
    height="1053"
    fill="none"
    {...props}
  >
    {
      renderPath
        ? renderPath(`url(#${gradientId})`)
        : (
          <path
            fill={`url(#${gradientId})`}
            fillRule="evenodd"
            d="M570.633 13.598c55.093 1.504 112.788-14.951 163.389 6.89 50.665 21.867 67.189 91.119 117.287 114.256 88.804 41.013 208.671 4.902 281.681 70.001 65.79 58.666 90.5 162.802 77.13 249.933-13.41 87.394-103.63 140.076-148.65 216.174-44.53 75.276-46.08 179.978-116.437 231.931-70.306 51.913-171.577 19.374-255.75 42.89-90.136 25.181-170.826 132.947-258.736 100.847-93.786-34.25-81.822-184.817-155.559-252.134-63.176-57.674-211.66-19.061-232.406-102.05-24.47-97.884 148.596-163.576 140.857-264.175-7.413-96.361-218.219-136.4-178.45-224.484 42.7-94.575 209.973-7.209 303.424-52.316 51.294-24.759 44.387-113.415 94.809-139.905 49.951-26.243 111.007.602 167.411 2.142Z"
            clipRule="evenodd"
          />
        )
    }
    <defs>
      {
        renderGradient
          ? renderGradient(gradientId)
          : (
            <linearGradient id={gradientId} x1="1213.63" x2="0" y1="526.218" y2="526.218" gradientUnits="userSpaceOnUse">
              <stop stopColor="gold" />
              <stop offset="1" stopColor="gold" stopOpacity="0" />
            </linearGradient>
          )
      }
    </defs>
  </svg>
);
