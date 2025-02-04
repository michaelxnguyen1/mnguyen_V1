import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// Removed Projects from List 'Featured, ______ , Contact }
import { Layout, Hero, About, Jobs, Featured, Contact } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

// Removed Projects from List <Featured /> , ______ , <Contact />
const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <Jobs />
      <Featured />

      <Contact />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
