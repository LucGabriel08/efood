import styled from "styled-components";
import { breakpoints, cores } from "../../styles/Global";

export const Card = styled.div`
  background-color: ${cores.salmao};
  padding: 8px;
  display: flex;
  flex-direction: column;
  min-height: 338px;

  @media (max-width: ${breakpoints.tablet}) {
    min-height: auto;

    @media (max-width: ${breakpoints.mobile}) {
      padding: 12px;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;

  @media (max-width: ${breakpoints.tablet}) {
    height: 220px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 180px;
  }
`;

export const Title = styled.h3`
  color: ${cores.corDeFundo};
  font-size: 16px;
  font-weight: 900;
  margin: 8px 0;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 15px;
  }
`;

export const Description = styled.p`
  color: ${cores.corDeFundo};
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
  flex-grow: 1;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 13px;
    line-height: 20px;
  }
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  padding: 4px;
  background-color: ${cores.corDeFundo};
  color: ${cores.salmao};
  font-size: 14px;
  font-weight: 700;

  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 10px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 13px;
  }
`;
