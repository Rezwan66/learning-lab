import Link from 'next/link';

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2>ContactLayout page</h2>
      <Link href={'contact/branch'}>Branch</Link>
      {children}
    </div>
  );
}
