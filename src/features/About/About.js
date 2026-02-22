import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

const About = () => (
  <Container>
    <Header title="O autorze" />

    <Section
      title="Cześć!"
      body={
        <>
          <p>Nazywam się: Bugs44</p>
          <p>
            To jest moja aplikacja Todo List zbudowana przy użyciu React i Redux
            Toolkit.
          </p>
        </>
      }
    />
  </Container>
);

export default About;
