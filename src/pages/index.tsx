import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import useDarkMode from 'hooks/useDarkMode';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 80px;
`;

const Goddess = styled.img`
  width: 160px;
  height: 160px;
`;

const TextBox = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h1 {
    color: var(--text-primary);
    font-size: 40px;
    line-height: 44px;
  }
  span {
    margin-top: 12px;
    color: var(--text-secondary);
    font-size: 20px;
  }
`;

const ThemeButton = styled.button`
  margin-top: 20px;
  padding: 8px 20px;
  border-radius: 100px;
  box-shadow: 0px 4px 12px rgba(99, 88, 122, 0.5);
  background-color: #63587a;
  color: #fff;

  span {
    font-size: 16px;
  }
`;

const Home: NextPage = () => {
  const { theme, setTheme } = useDarkMode();

  return (
    <>
      <Head>
        <title>{"Kuko's Next.js Boilerplate"}</title>
      </Head>
      <Container>
        <Goddess src="https://i.imgur.com/DQaWmTF.jpg" />
        <TextBox>
          <h1>{"KuKo's Next.js Boilerplate"}</h1>
          <span>Thank you.</span>
        </TextBox>
        <ThemeButton onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          <span>current theme is... {theme === 'light' ? '☀️' : '🌙'}</span>
        </ThemeButton>
      </Container>
    </>
  );
};

export default Home;
