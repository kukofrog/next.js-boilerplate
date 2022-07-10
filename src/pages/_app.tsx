import '../styles/globals.css';
import type { AppProps } from 'next/app';
import useDarkMode from 'hooks/useDarkMode';

function MyApp({ Component, pageProps }: AppProps) {
  useDarkMode();
  return <Component {...pageProps} />;
}

export default MyApp;
