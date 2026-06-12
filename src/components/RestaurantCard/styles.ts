import styled from "styled-components";
import { breakpoints, cores } from "../../styles/Global";

import { Link } from "react-router-dom";

export const Card = styled.div`
  border: 1px solid ${cores.salmao};
  background-color: ${cores.branco};
  position: relative;
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.mobile}) {
    margin: 0 auto;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;

  @media (max-width: ${breakpoints.mobile}) {
    height: 180px;
  }
`;

export const Content = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 8px;
  }
`;

export const Title = styled.h3`
  color: ${cores.salmao};
  font-size: 18px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
  }
`;

export const Rate = styled.span`
  color: ${cores.salmao};
  font-weight: bold;
`;

export const Description = styled.p`
  color: ${cores.salmao};
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 13px;
    line-height: 20px;
  }
`;

export const Button = styled.button`
  width: 82px;
  height: 24px;
  border: none;
  background-color: ${cores.salmao};
  color: ${cores.salmaoClaro};
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100px;
    height: 32px;
  }
`;

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
  z-index: 1;

  @media (max-width: ${breakpoints.mobile}) {
    top: 8px;
    right: 8px;
    gap: 4px;
  }
`;

export const Tag = styled.span`
  background-color: ${cores.salmao};
  color: ${cores.branco};
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 10px;
    padding: 4px 6px;
  }
`;

export const RateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Star = styled.img`
  width: 16px;
  height: 16px;
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
`;
