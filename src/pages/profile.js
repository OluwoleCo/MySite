import React from 'react';
import Helmet from 'react-helmet';

import PageHeader from 'components/page-header';
import {H3, Text, P} from 'components/typography';
import Section, {SectionTitle} from 'components/section';

export default ({data}) => {
  const meta = data.site.siteMetadata;
  return (
    <main>
      <Helmet title={`Profile - ${meta.defaultTitle}`}>
        <meta name="twitter:title" content={`Profile - ${meta.defaultTitle}`} />
        <meta name="twitter:description" content={meta.defaultDescription} />
      </Helmet>
      <PageHeader title="Profile" />
      <Section>
        <P>
          I’m Wole, a data scientist and financial analyst. Previously, I co-founded JoppaLogic a 
          logisics startup
          backed by MEST and worked as a Product manager and Financial Analyst at {' '} 
          <a
            href="https://riby.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            RibyFinance
          </a>,{' '} 
           <a
            href="https://brickstone.africa"
            target="_blank"
            rel="noopener noreferrer">
              Brickstone 
            </a>,{' '} 
            
            <a
            href="https://amplifypay.com"
            target="_blank"
            rel="noopener noreferrer"
            >
              Amplify.
            </a>
          
        </P>
        <P>
          I am currently curious about how data and finance intersects with the the investing and 
          financial services. I work a {' '}
          <a
            href="https://quantextive.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quantextive
          </a>, a financial data analytics startup.
        </P>
      </Section>
      <Section>
        <SectionTitle>Experience</SectionTitle>
        <P>
          I currently work with data at {' '}
          <a
            href="https://quantextive.com"
          >
          Quantextive
          </a>
        </P>
        <P>
          I had a short stint as a product manager at RibyFinance leading the product team.
        </P>
        <P>
          I started my career as a financial analyst, crunching numbers and exploring data.

        </P>
      </Section>

      <Section>
        <SectionTitle>Projects</SectionTitle>
        <Text>
          <a href="https://github.com/OluwoleCo/NigerianArtistYoutubeData">
            Who won 2017? - Analysis of Nigerian artist's performance in 2017 using data from YouTube
          </a>
        </Text>
        <Text>
          <a href="https://afriq.co">
            Afriqco - A snapshot of Africa's most promising startups
          </a>
        </Text>
        <Text>
          <a href="http://recursivealpha.substack.com">
            Recursive-Alpha Newsletter - A newsletter about technology
          </a>
        </Text>
        <Text>
          <a href="https://medium.com/@OluwoleCo/how-we-bootstrapped-a-data-science-meetup-27ac56ca4c5e">
            DataSci Lagos - Created a data science meetup
          </a>
        </Text>
      </Section>
    </main>
  );
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
