import * as React from 'react';

interface iSpacerProps {
  fraction: number;
}

export const Spacer: React.FC<iSpacerProps> = ({ fraction }) => (
  <div
    style={{
      height: 8 * fraction,
    }}
  />
) 
