import styled from "styled-components";
import { breakpoints, cores } from "../../styles/Global";
import { Vector } from "../../assets/images";

export const Container = styled.header`
  background-color: ${cores.salmaoClaro};
  padding: 24px;
  border-radius: 16px;
  background-image: url(${Vector});
  background-repeat: repeat;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 16px;
    border-radius: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 12px;
  }
`;

export const Link = styled.a`
  color: ${cores.salmao};
  font-size: 18px;
  font-weight: 900;
  text-decoration: none;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const Logo = styled.img`
  width: 125px;

  @media (max-width: ${breakpoints.mobile}) {
    width: 90px;
  }
`;

export const Cart = styled.span`
  color: ${cores.salmao};
  font-weight: 900;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
    text-align: right;
  }
`;
