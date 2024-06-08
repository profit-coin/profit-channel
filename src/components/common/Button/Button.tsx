import { PropsWithChildren } from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  onClick: () => void;
}

function Button({ children, onClick }: PropsWithChildren<ButtonProps>) {
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
