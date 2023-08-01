import { MouseEventHandler, ReactElement, FC } from 'react';

import { cn } from '@/lib/utils';

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement | undefined>;
  icon: ReactElement;
  className?: string;
}
const IconButton: FC<IconButtonProps> = ({ onClick, className, icon }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-full flex items-center justify-center bg-white border-shadow-md p-2 hover:scale-110 transition',
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
