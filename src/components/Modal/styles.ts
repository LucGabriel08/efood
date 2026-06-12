import styled from "styled-components";
import { breakpoints, cores } from "../../styles/Global";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  overflow-y: auto;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  padding: 32px;
  background-color: ${cores.salmao};
  display: flex;
  gap: 24px;
  position: relative;
  border-radius: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    width: 95%;
    padding: 24px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    padding: 16px;
    gap: 16px;
  }
`;

export const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: 220px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 180px;
  }
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

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 900;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 13px;
    line-height: 20px;
  }
`;

export const Portion = styled.p`
  font-size: 14px;
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 13px;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: ${cores.salmaoClaro};
  color: ${cores.salmao};
  padding: 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    padding: 12px;
  }
`;
