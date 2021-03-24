import styled, { css } from 'styled-components';
import { FormContainer } from 'components/form/Form';
import { appearFromBottom } from '../animations';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled(FormContainer)`
  align-items: flex-start;
  animation: ${appearFromBottom} 0.6s ease-in-out;
  transition: height 0.2s ease-in-out;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const MusicList = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsm} 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    animation: ${appearFromBottom} 0.6s ease-in-out;
    transition: all 0.2s ease-in-out;
  `}
`;
export const MusicWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Error = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    margin-top: ${theme.spacings['2xs']};
  `}
`;

export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    width: 100%;
    text-align: center;
    margin-top: ${theme.spacings['2xs']};
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.light.lighter};
    font-family: ${theme.font.family};
    font-weight: 500;
    line-height: ${theme.font.lineHeight.md};
    font-size: ${theme.font.sizes.lg};
  `}
`;

export const HasAccount = styled.div`
  ${({ theme }) => css`
    > a {
      display: flex;
      align-items: center;
      color: ${theme.colors.light.lighter};
      font-weight: 500;
      cursor: pointer;
      text-decoration: none;

      > svg {
        margin-right: ${theme.spacings['2xs']};
      }
    }
  `}
`;
