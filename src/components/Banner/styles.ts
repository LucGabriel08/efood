import styled from "styled-components";
import { breakpoints, cores } from "../../styles/Global";

export const Image = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
  background-size: cover;
  background-position: center;

  @media (max-width: ${breakpoints.tablet}) {
    height: 260px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 220px;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: #000;
    opacity: 0.5;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1024px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 24px 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 16px;
  }
`;

export const Category = styled.h3`
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 100;
  line-height: 38px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 28px;
    line-height: 34px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 22px;
    line-height: 28px;
  }
`;

export const Title = styled.h2`
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 900;
  line-height: 38px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 28px;
    line-height: 34px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
    line-height: 30px;
  }
`;
