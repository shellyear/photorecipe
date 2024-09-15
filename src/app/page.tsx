import Logo from "@/components/Logo";
import PageContainer from "@/components/PageContainer";
import Introduction from "@/components/sections/Introduction";
import Link from "next/link";

export default function Home() {
  return (
    <PageContainer>
      <header className="mb-6 flex justify-between gap-4 md:mb-16">
        <Logo />
        <div className="hidden flex-1 items-center gap-12 px-16 md:inline-flex">
          <Link href="/#pricing">Pricing</Link>
          <Link href="/#signup">Signup</Link>
        </div>
        <button className="btn btn-sm">LOG IN</button>
      </header>
      <main>
        <Introduction />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </PageContainer>
  );
}
