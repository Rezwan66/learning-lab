'use client';
import { useEffect } from 'react';

// error.tsx must be a Client Component

export default function AboutError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // We can pass this error to a logger
    console.error(error);
  }, []);
  return (
    <div>
      <h2>Something went wrong: Please try again later!</h2>
      <button onClick={() => reset()}>Retry</button>
    </div>
  );
}
