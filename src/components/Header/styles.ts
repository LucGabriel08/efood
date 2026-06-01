import styled from "styled-components";
import { Vector } from "../../assets/images";
import { cores } from "../../styles/Global";

export const Hero = styled.header`
  background-color: ${cores.salmaoClaro};
  background-image: url(${Vector});
  background-repeat: repeat;
  padding: 40px 0;
  text-align: center;
`;

export const Logo = styled.img`
  color: ${cores.salmao};
  font-size: 32px;
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  color: ${cores.salmao};
  font-size: 36px;
  line-height: 42px;
`;
