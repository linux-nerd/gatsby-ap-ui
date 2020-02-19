import React from "react";
import "../theme/index.scss";
import Section from "../components/section-wrapper/SectionWrapper";
import SectionTitle from "../components/section-title/SectionTitle";
import ReactMarkdown from "react-markdown";
import {
  social,
  ABOUT_ME,
  skills,
  experiences,
  education,
  expertise
} from "../data/content";
import Skills from "../components/skills/SkillsWrapper";
import MiniCardsWrapper from "../components/mini-cards/MiniCardsWrapper";
import Layout from "../components/layout/Layout";
const LandingPage = () => {
  return (
    <Layout social={social}>
      <Section>
        <SectionTitle title="What I am all about." />
        <ReactMarkdown source={ABOUT_ME} />
      </Section>
      <Section darkBg>
        <SectionTitle title="Expertise" />
        <ul>
          {expertise.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Section>
      <Section>
        <SectionTitle title="Skills" />
        <Skills skills={skills} />
      </Section>
      <Section darkBg>
        <SectionTitle title="Work Experience" />
        <MiniCardsWrapper cards={experiences} />
      </Section>
      <Section>
        <SectionTitle title="Education" />
        <MiniCardsWrapper cards={education} />
      </Section>
      {/*
      <Section darkBg>
        <SectionTitle title="Interest" />
      </Section>
      <Section>
        <SectionTitle title="Open Source Software" />
      </Section>{" "}
      */}
      <Section darkBg>
        <SectionTitle title="Contact" />
        <address>
          <strong>Email</strong>
          <br />
          <a href="mailto:hello@abhishekprakash.com">
            hello@abhishekprakash.com
          </a>
          <br />
          <a href="mailto:abhishekabby@gmail.com">abhishekabby@gmail.com</a>
        </address>
      </Section>
    </Layout>
  );
};
export default LandingPage;
