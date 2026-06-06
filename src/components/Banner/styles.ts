import styled from "styled-components";
import { cores } from "../../styles/Global";

export const Image = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
  background-size: cover;
  background-position: center;
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
`;

export const Category = styled.h3`
  color: ${cores.branco};

  font-size: 32px;
  font-weight: 100;
  line-height: 38px;
`;

export const Title = styled.h2`
  color: ${cores.branco};

  font-size: 32px;
  font-weight: 900;
  line-height: 38px;
`;
