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
          <img
            src={coverPhoto}
            style={{width: '100%', marginBottom: 16}}
            alt="IT ME!"
          />
          <P>
            <br />
            Hi! My name is Oluwole Oyekanmi, a data scientist living in Lagos. I am currently 
            curious about how data and data science tools intersects with investing and 
          financial services
          </P>
          <P>
            I am currently working at {' '}
            <a href="https://quantextive.com">
              Quantextive 
            </a>{' '}
            a financial data analytics company, where I head up the operations team.
            </P>
            <P>
            Out of work, I spend
             time creating research reports on industries, birthing new and
            exciting data visualisations and serving as an analytical & financial opinionist.
          </P>
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
