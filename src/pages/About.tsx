import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: #14213d;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  color: #14213d;
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: #fca311;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <Title>Covid APP React UAS Frontend</Title>

      <Section>
        <SectionTitle>Profile</SectionTitle>
        <List>
          <ListItem>Muhammad Raihan</ListItem>
          <ListItem>
            <Link
              href="https://github.com/raihandotmd"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github - raihan.md
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/raihandotmd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn - raihan.md
            </Link>
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Project</SectionTitle>
        <List>
          <ListItem>
            <Link
              href="https://www.figma.com/design/zMkvp7evO6fN0nhtjShWmO/Covid-App-React---Frontend---Ka-Aufa-Billah?node-id=646-44&t=GBfkUyA4Pw1bb13h-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Figma Design
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#api-section">API Endpoints</Link>
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Tech Stack</SectionTitle>
        <List>
          <ListItem>Library: React.js</ListItem>
          <ListItem>Hooks: state, effect </ListItem>
          <ListItem>Data Fetching: Axios</ListItem>
          <ListItem>Routing: React Router</ListItem>
          <ListItem>State Management: React Context</ListItem>
          <ListItem>Deployment: Vercel</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle id="api-section">API Endpoints</SectionTitle>
        <List>
          <ListItem>
            Global Data:{" "}
            <Link
              href="https://covid-fe-2023.vercel.app/api/global.json"
              target="_blank"
              rel="noopener noreferrer"
            >
              covid-fe-2023.vercel.app/api/global.json
            </Link>
          </ListItem>
          <ListItem>
            Indonesia Data:{" "}
            <Link
              href="https://covid-fe-2023.vercel.app/api/indonesia.json"
              target="_blank"
              rel="noopener noreferrer"
            >
              covid-fe-2023.vercel.app/api/indonesia.json
            </Link>
          </ListItem>
        </List>
      </Section>
    </AboutContainer>
  );
};

export default About;
