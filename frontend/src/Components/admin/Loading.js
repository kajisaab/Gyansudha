// Loading Logo

import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import * as Loader from "../../loading.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Loader.default,
  renderSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Loading() {
  return (
    <>
      <LottieContainer>
        <Lottie options={defaultOptions} height={420} width={400} />
      </LottieContainer>
    </>
  );
}

export default Loading;

const LottieContainer = styled.div`
  margin-top: 10em;
`;
