import styled from "styled-components";
import { Vector } from "../../assets/images";
import { breakpoints, cores } from "../../styles/Global";

export const Hero = styled.header`
  background-color: ${cores.salmaoClaro};
  background-image: url(${Vector});
  background-repeat: repeat;
  padding: 40px 0;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 32px 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 24px 16px;
  }
`;

export const Logo = styled.img`
  color: ${cores.salmao};
  font-size: 32px;
  margin-bottom: 24px;

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 100px;
    margin-bottom: 16px;
  }
`;

export const Title = styled.h2`
  color: ${cores.salmao};
  font-size: 36px;
  line-height: 42px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 30px;
    line-height: 36px;
    padding: 0 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
    line-height: 30px;
    padding: 0 12px;
  }
`;
