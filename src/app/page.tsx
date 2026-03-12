import { TopPageClient } from "./TopPageClient";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function TopPage() {
  return (
    <>
      <Header />
      <main>
        <TopPageClient />
      </main>
      <Footer />
    </>
  );
}
