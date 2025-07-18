import * as React from 'react';
import { IconProps } from './types';

export const PlayIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className = '',
  style = {},
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={`artcraft-ui-icon artcraft-ui-icon--play inline-flex ${className}`}
      style={{ ...style }}
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
};

export default PlayIcon;
