import React, { useState } from "react";
import { useInterval } from "react-use";
import styled, { keyframes } from "styled-components";

function Slider() {
  const quotes1 = "This is good".split(",");
  const quotes2 = "Aman Khadka".split(",");
  const quotes3 = "Finally I'm learning programming".split(",");

  // const idioms = quotes.split("");

  const [count, setCount] = useState(0);
  const [data, setData] = useState(quotes1);

  useInterval(() => {
    setCount(count + 1);
    console.log(count);

    if (count === 0) {
      setData(quotes2);
    }
    if (count === 1) {
      setData(quotes3);
    }

    if (count === 2) {
      setCount(0);
      setData(quotes1);
    }
  }, 10000);

  return (
    <>
      <Wrapper>
        {data.map((items, index) => (
          <span key={index}>{items}</span>
        ))}
      </Wrapper>
    </>
  );
}

export default Slider;

const animation = keyframes`
0%{ opacity: 0;} 
25%{opacity:1; }
75%{opacity:1; }
100%{opacity: 0;} 
`;

const Wrapper = styled.span`
  display: inline-block;
  span {
    display: inline-block;
    opacity: 0;
    color: #000;
    z-index: +5;
    font-weight: bold;
    font-size: 1.5em;
    animation-name: ${animation};
    animation-duration: 10s;
    animation-iteration-count: infinite;
  }
`;
