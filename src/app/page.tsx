import Logo from "@/components/Logo";
import Container from "@/components/Container";
import HowItWorks from "@/components/sections/HowItWorks";
import Introduction from "@/components/sections/Introduction";
import Link from "next/link";
import SingleReview from "@/components/sections/SingleReview";

export default function Home() {
  return (
    <>
      <header>
        <Container>
          <div className="mb-6 flex justify-between gap-4 md:mb-16">
            <Logo />
            <div className="hidden flex-1 items-center gap-12 px-16 md:inline-flex">
              <Link href="/#pricing">Pricing</Link>
              <Link href="/#signup">Signup</Link>
            </div>
            <button className="btn btn-sm">LOG IN</button>
          </div>
        </Container>
      </header>
      <main>
        <Introduction />
        <HowItWorks />
        <SingleReview
          feedback="This app instantly gives me recipe ideas just by uploading a photo of
          my ingredients. It’s perfect for busy weeknights when I need quick
          meal inspiration. Highly recommended!"
          imgPath="/salta.jpg"
          name="Salta Sutey"
          occupation="Home chef"
        />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </>
  );
}
