'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SolutionsPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/solutions/marrocsolutions');
  }, [router]);

  return null;
}
