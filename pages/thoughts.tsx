import Container from "../components/container";
import Hero from "../components/hero";
import Nav from "../components/nav";

export default function Thoughs() {
  return (
    <Container>
      <Nav />
      <Hero
        headline="Thoughts. Coming soon."
        subheading="A collections of thoughts, either related to animal rights, philosophy, minimalism or programming."
        align="center"
      />
    </Container>
  );
}
