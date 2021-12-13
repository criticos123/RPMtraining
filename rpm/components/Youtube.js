import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const Youtube = ({ embedId }) => (
  <Wrapper className="video-responsive">
    <iframe
      width="200"
      height="280"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </Wrapper>
);

Youtube.propTypes = {
  embedId: PropTypes.string.isRequired
};

const Wrapper= styled.div`

    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
    width:400px;

    iframe{
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        position: absolute;
    }

`;



export default Youtube;