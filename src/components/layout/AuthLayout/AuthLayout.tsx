import { useAuth } from '@/auth/authContext';
import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect } from 'react';

function AuthLayout({ children }: PropsWithChildren) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      void router.push('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading) null;

  return children;
}

export default AuthLayout;
