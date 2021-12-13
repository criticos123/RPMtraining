import styled from "styled-components";

export default function Layout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  linear-gradient(lightblue, transparent),
  linear-gradient(to top , #6495ED, transparent);
  background-blend-mode: screen;
  margin:auto;
  flex-wrap: wrap;
`;
