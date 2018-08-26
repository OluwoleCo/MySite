import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import {Box} from 'grid-styled';
import styled from 'styled-components';

import {Text, P} from 'components/typography';
import Section, {SectionTitle} from 'components/section';

import coverPhoto from './index-cover.jpg';

const PostDate = styled(Text)`
  font-size: 0.8em;
  display: block;
`;

const Index = ({data}) => {
  const {edges: posts} = data.allMarkdownRemark;
  const meta = data.site.siteMetadata;
  return (
    <div>
      <main>
        <Helmet title={meta.defaultTitle}>
          <meta name="twitter:title" content={meta.defaultTitle} />
          <meta name="twitter:description" content={meta.defaultDescription} />
        </Helmet>
        <Section pt={[20, 40]}>
          {/* <img
            src={coverPhoto}
            style={{width: '100%', marginBottom: 16}}
            alt="IT ME!"
          /> */}
          <P>
            <br />
            This is the homepage and data science blog of Oluwole Oyekanmi. For more about me, {' '}
            <Link to="/about/" style={{textDecoration: 'underline'}}> see here</Link>
            
          </P>
          {/* <P>
            COO at {' '}
            <a href="https://quantextive.com">
              Quantextive 
            </a>{' '}
            a Nigerian firm that gathers, curates and analyzes financial insights and data.
            </P> */}
            {/* <P>
            I spend the bulk of my out-of-work time researching and writing 
            overviews on industries, and birthing new and exciting data 
            visualisations.
            I'm an eternal analytical & financial opinionist.
          </P> */}
          {/* <P>
            Sign up for my weekly newsletter, {' '}
            <a href="https://recursivealpha.substack.com">
              Recursivealpha
            </a>, and get my opinions on all things #fintech and #data.
          </P> */}
        </Section>
        <Section>
          <SectionTitle>Recent articles</SectionTitle>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({node: post}) => (
              <Box mb={2} key={post.frontmatter.title}>
                <Text>
                  <Link to={post.fields.slug} style={{textDecoration: 'none'}}>
                    {post.frontmatter.title}
                    <PostDate is="time" dateTime={post.fields.date}>
                      {post.fields.date}
                    </PostDate>
                  </Link>
                </Text>
              </Box>
            ))}
        </Section>
      </main>
    </div>
  );
};

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        defaultTitle
        defaultDescription
      }
    }
    allMarkdownRemark(sort: {fields: [fields___date], order: DESC}) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          fields {
            date(formatString: "MMMM DD, YYYY")
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
