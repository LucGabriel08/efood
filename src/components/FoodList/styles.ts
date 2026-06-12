import styled from "styled-components";
import { breakpoints } from "../../styles/Global";

export const List = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 56px auto 120px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 16px;
    margin: 40px auto 64px;
    gap: 24px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 0 16px;
    margin: 32px auto 48px;
    gap: 16px;
  }
`;
