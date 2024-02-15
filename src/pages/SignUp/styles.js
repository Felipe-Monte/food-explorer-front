import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1106px;
  height: 100vh;

  margin: auto;
  padding: 122px 10px;

  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (max-width: 500px) {
    padding: 90px 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  max-width: 476px;
  width: 100%;

  padding: 34px 54px;
  border-radius: 16px;

  background-color: ${({ theme }) => theme.COLORS.BLUE_200};

  > h2 {
    font-family: "Poppins", sans-serif;
    font-size: 32px;
    font-weight: 500;
    line-height: 68px;
    text-align: center;

    margin-bottom: 32px;
  }

  > a {
    margin-top: 32px;

    text-align: center;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  .btn_login {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }

  > .inputs {
    margin-bottom: 32px;
  }

  > .inputs p {
    font-size: 16px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  @media only screen and (max-width: 500px) {
    padding: 10px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    h2 {
      display: none;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.BLUE};
  margin-bottom: 40px;

  h1 {
    font-size: clamp(3rem, 3rem + 1.5vw, 4.248rem);
    white-space: nowrap;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  .logo {
    display: flex;
    gap: 19px;
  }

  svg {
    height: 50px;
    width: 50px;
  }

  @media only screen and (max-width: 500px) {
    h1 {
      font-size: clamp(3rem, 2.5rem + 1.5vw, 4.248rem);
    }

    svg {
      height: 35px;
      width: 35px;
    }

    .logo {
      gap: 12px;
    }
  }
`;
