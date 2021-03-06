import React from 'react';
import {Flex} from 'grid-styled';

const CURRENT_YEAR = new Date().getFullYear();

const StyledFooter = Flex.extend`
  width: 100%;
  padding: 16px 0 32px;
  margin-top: 40px;
  border-top: 1px solid #e7eefd;
  font-size: 14px;
  color: ${props => props.theme.colors.text};

  a {
    margin: 0 8px;
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    border-bottom: 0;
  }
`;

const Footer = () => (
  <StyledFooter is="footer">
    <span itemScope="" itemType="http://schema.org/Organization">
      <link itemProp="url" href="http://oluwole.co" />
      &copy; {CURRENT_YEAR} -
      <a
        target="_blank"
        rel="noopener noreferrer me"
        href="https://twitter.com/oluwoleco"
        itemProp="sameAs"
      >
        Twitter
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer me"
        href="http://github.com/oluwoleco"
        itemProp="sameAs"
      >
        GitHub
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://medium.com/@oluwoleco"
      >
       Medium
      </a>
    </span>{'   '}
    {/* <small
      style={{ marginLeft: 250 }}
    >
      <p>Built using theme by 
          <a
          href="https://twitter.com/alexjpate"
        >
          Alex Pate
        </a>
        </p>
    </small> */}
  </StyledFooter>
);

export default Footer;
