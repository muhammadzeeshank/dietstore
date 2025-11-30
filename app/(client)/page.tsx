import Container from "@/components/Container";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    // <Container className="py-10">
    <>
      <Hero />
      <Features />
      <ProductGrid />
    </>
    // </Container>
  );
}
