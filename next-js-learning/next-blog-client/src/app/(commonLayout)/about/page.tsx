export const dynamic = 'force-dynamic';

export default async function AboutPage() {
  await new Promise(resolve => setTimeout(resolve, 4000)); //fetch simulate

  // throw new Error('Something went wrong! 🧐'); //simulate error
  return (
    <div>
      <h2>AboutPage page</h2>
    </div>
  );
}
