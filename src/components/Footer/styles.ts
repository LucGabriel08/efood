import styled from "styled-components";
import { breakpoints, cores } from "../../styles/Global";

export const Container = styled.footer`
  background-color: ${cores.salmaoClaro};
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
  width: 125px;
  margin-bottom: 24px;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100px;
    margin-bottom: 16px;
  }
`;

export const Text = styled.p`
  max-width: 480px;
  margin: 0 auto;
  color: ${cores.salmao};
  font-size: 10px;
  line-height: 14px;

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 100%;
    font-size: 12px;
    line-height: 18px;
    padding: 0 8px;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 80px;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 40px;
    gap: 12px;
  }
`;

export const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const SocialLink = styled.a`
  display: flex;
`;
