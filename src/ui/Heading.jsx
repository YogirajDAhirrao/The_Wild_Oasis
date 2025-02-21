import styled, { css } from "styled-components";

// const test = css`
//   text-align: center;
// `;

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-weight: 600;
      font-size: 20px;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-weight: 600;
      font-size: 2rem;
    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      font-weight: 500;
      font-size: 2rem;
    `}
    line-height:1.4;
`;
export default Heading;
