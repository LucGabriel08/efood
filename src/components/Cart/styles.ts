import styled from "styled-components";
import { breakpoints, cores } from "../../styles/Global";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 998;
`;

export const Container = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100vh;
  background-color: ${cores.salmao};
  padding: 32px 8px 16px;
  z-index: 999;
  overflow-y: auto;

  @media (max-width: ${breakpoints.tablet}) {
    width: 320px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 80%;
    padding: 24px 16px;
  }
`;

export const CartList = styled.ul`
  list-style: none;
`;

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.salmaoClaro};
  padding: 8px;
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 12px;
  }
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;

  @media (max-width: ${breakpoints.mobile}) {
    width: 70px;
    height: 70px;
  }
`;

export const Info = styled.div`
  margin-left: 8px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.salmao};
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
  }
`;

export const Price = styled.span`
  display: block;
  font-size: 14px;
  color: ${cores.salmao};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 13px;
  }
`;

export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-top: auto;
  align-self: flex-end;
  display: flex;
  justify-content: flex-end;
  padding: 0;
  img {
    width: 16px;
    height: 16px;

    @media (max-width: ${breakpoints.mobile}) {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${cores.salmaoClaro};
  font-size: 14px;
  font-weight: bold;
  margin: 40px 0 16px;

  @media (max-width: ${breakpoints.mobile}) {
    margin: 24px 0 16px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  cursor: pointer;
  background-color: ${cores.salmaoClaro};
  color: ${cores.salmao};
  font-size: 14px;
  font-weight: bold;

  @media (max-width: ${breakpoints.mobile}) {
    height: 48px;
    font-size: 16px;
  }
`;
