import Container from "../components/container";
import Hero from "../components/hero";
import Nav from "../components/nav";

export default function About() {
  return (
    <Container>
      <Nav />
      <Hero
        headline="About. Coming soon."
        subheading="Get to know me better, on this page I'll properly introduce myself and tell you something about me."
        align="center"
      />
    </Container>
  );
}
