import styled from "styled-components";
import { cores } from "../../styles/Global";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
`;

export const Container = styled.div`
  width: 1024px;
  padding: 32px;
  background-color: ${cores.salmao};
  margin: 100px auto;
  display: flex;
  gap: 24px;
  position: relative;
`;

export const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`;

export const Content = styled.div`
  color: ${cores.branco};
  flex: 1;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  border: none;
  background: transparent;
  color: ${cores.branco};
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

export const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 900;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`;

export const Portion = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  border: none;
  background-color: ${cores.salmaoClaro};
  color: ${cores.salmao};
  padding: 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;
