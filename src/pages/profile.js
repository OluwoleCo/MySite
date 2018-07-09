import React from 'react';
import Helmet from 'react-helmet';

import PageHeader from 'components/page-header';
import {H3, Text, P} from 'components/typography';
import Section, {SectionTitle} from 'components/section';

export default ({data}) => {
  const meta = data.site.siteMetadata;
  return <main>
      <Helmet title={`Profile - ${meta.defaultTitle}`}>
        <meta name="twitter:title" content={`Profile - ${meta.defaultTitle}`} />
        <meta name="twitter:description" content={meta.defaultDescription} />
      </Helmet>
      <PageHeader title="Profile" />

      <Section>
        <P>
          Oluwole (Wole) Oyekanmi, a data scientist, is Chief Operating Officer at 
          <a href="https://quantextive.com" 
             target="_blank" 
             rel="noopener noreferrer">
            Quantextive
          </a>, a Lagos-based firm that marries the application of machine 
          learning with domain expertise and enables users to understand and 
          make decisions for African markets. He is also Founder and Editor of
          <a href="http://recursivealpha.substack.com"> Recursive-Alpha</a>
          , a weekly publication leverages his finance experience and technology expertise to deliver 
          a layman’s overview of the latest news in technology and startup investing to readers across Africa.
        </P>
      </Section>

      <Section>
        <SectionTitle>Projects</SectionTitle>
        <Text>
          <a href="https://github.com/OluwoleCo/NigerianArtistYoutubeData">
            Nigerian music industry - Who won 2017? (A data driven approach to
            identify artist with the most listens for the year)
          </a>
        </Text>
        <Text>
          <a href="https://afriq.co">
            Afriqco - A snapshot of Africa's most promising startups
          </a>
        </Text>
        <Text>
          <a href="https://medium.com/@OluwoleCo/how-we-bootstrapped-a-data-science-meetup-27ac56ca4c5e">
            DataSci Lagos - The first MeetUp focused on open data science in
            Lagos
          </a>
        </Text>
      </Section>
    </main>;
};

export const pageQuery = graphql`
  query ProfileQuery {
    site {
      siteMetadata {
        defaultTitle
        defaultDescription
      }
    }
  }
`;
