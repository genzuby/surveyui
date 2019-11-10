/* eslint-disable */
import styled from "styled-components";

// SurveyBody BG MOBILE
export const BODY = styled.div`
  background-color: ${props =>
    props.first
      ? "rgba(0, 0, 0, 0.3)"
      : props.last
      ? "rgba(0, 0, 0, 0.55)"
      : ""};
  background: ${props =>
    props.first
      ? "url(/images/welcome.jpg)"
      : props.last
      ? "url(/images/thankyou.jpg)"
      : "var(--bg--gray--light)"};
  background-blend-mode: multiply;
  background-size: cover;
  background-repeat: no-repeat;
  color: ${props =>
    props.first ? "#fff" : props.last ? "#fff" : "var(--text--main--color)"};
  border: ${props => (props.first ? "0px" : props.last ? "0px" : "1px")} solid
    var(--bg--gray);
  p,
  h1 {
    text-shadow: ${props =>
      props.first
        ? "2px 2px 2px rgba(0,0,0,0.3)"
        : props.last
        ? "2px 2px 2px rgba(0,0,0,0.3)"
        : ""};
  }
`;

// SurveyBody BG WEB
export const BODYWEB = styled.div`
  background-color: ${props =>
    props.first
      ? "rgba(0, 0, 0, 0.3)"
      : props.last
      ? "rgba(0, 0, 0, 0.55)"
      : ""};
  background: ${props =>
    props.first
      ? "url(/images/welcome-web.jpg)"
      : props.last
      ? "url(/images/thankyou-web.jpg)"
      : "var(--bg--gray--light)"};
  background-blend-mode: multiply;
  background-size: cover;
  background-repeat: no-repeat;
  color: ${props =>
    props.first ? "#fff" : props.last ? "#fff" : "var(--text--main--color)"};
  border: ${props => (props.first ? "0px" : props.last ? "0px" : "1px")} solid
    var(--bg--gray);
  p,
  h1 {
    text-shadow: ${props =>
      props.first
        ? "2px 2px 2px rgba(0,0,0,0.3)"
        : props.last
        ? "2px 2px 2px rgba(0,0,0,0.3)"
        : ""};
  }
`;

// Previous / Nest Button
export const BUTTON = styled.button`
  width: 100%;
  background: ${props =>
    props.available ? "var(--available--bg)" : "var(--disable--bg)"};
  border: 1px solid
    ${props =>
      props.available ? "var(--available--border)" : "var(--disable--border)"};
  height: 2.6em;
  font-size: 1.1rem;
  color: ${props =>
    props.available ? "var(--available--font)" : "var(--disable--font)"};
  border-radius: 4px;
  margin: 0 0.2em;
  outline: none;
  /* cursor disable when it's not available */
  pointer-events: ${props => (!props.available ? "none" : "auto")};
  cursor: ${props => (!props.available ? "nnot-not-allowed" : "pointer")};
  text-align: center;
`;

// Input styles
export const INPUT = styled.input`
  width: 80%;
  height: 2.3em;
  font-size: 1.1rem;
  padding: 0 0.5em;
  border: 1px solid var(--bg--gray--color);
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;

export const INPUROTH = styled.div`
  padding: ${props => (props.type === "radio" ? ".8em 15%" : "1em")};
  label {
    font-size: 1rem;
  }
`;

export const INPUROTHWEB = styled.div`
  padding: ${props =>
    props.type === "radio"
      ? ".8em calc(25% + 5vw)"
      : "1em 0 1em calc(10% + 10vw)"};
  label {
    font-size: 1rem;
  }
`;
