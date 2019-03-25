import React from "react";
import styled from "styled-components";

const Loading = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  text-align: center;

  & > div {
    width: 20px;
    height: 20px;
    background-color: white;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;

const LoadingComponent = () => (
  <Loading>
    <div className="bounce1" />
    <div className="bounce2" />
    <div className="bounce3" />
  </Loading>
);

export default LoadingComponent;
