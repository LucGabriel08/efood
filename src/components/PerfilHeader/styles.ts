import styled from "styled-components";
import { cores } from "../../styles/Global";
import { Vector } from "../../assets/images";

export const Container = styled.header`
  background-color: ${cores.salmaoClaro};
  padding: 24px;
  border-radius: 16px;
  background-image: url(${Vector});
  background-repeat: repeat;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Link = styled.a`
  color: ${cores.salmao};
  font-size: 18px;
  font-weight: 900;
  text-decoration: none;
`;

export const Logo = styled.img`
  width: 125px;
`;

export const Cart = styled.span`
  color: ${cores.salmao};
  font-weight: 900;
`;
