import Link from 'next/link';
import { PropsWithChildren } from 'react';

interface LinkProps {
  to: string;
  className?: string;
}

export function InternalLink ({ to, children, className }: PropsWithChildren<LinkProps>) {
  return (
    <Link href={to} className={className}>
      {children}
    </Link>
  );
}
