export const dynamic = 'force-dynamic'; //* this is actually for build-time, on build, if this is not provided, Nextjs takes the time of the setTimeout onbuild, and doesnt show the loading on the page-->it force caches the page coming from server. Hence we need this to instruct Nextjs to say: “I don’t care if you think this can be static. Run this page on the server on every request.”

export default async function AboutPage() {
  await new Promise(resolve => setTimeout(resolve, 4000)); //fetch simulate

  // throw new Error('Something went wrong! 🧐'); //simulate error
  return (
    <div>
      <h2>AboutPage page</h2>
    </div>
  );
}
