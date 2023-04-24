// import '@/styles/globals.css'
import GlobalStyles from "@/components/styled/Global";
import Header from "@/components/organisms/Header";
import { ThemeProvider } from "styled-components";
import Layout from "@/components/Layout";
export default function App({ Component, pageProps }) {
  const theme = {
    color: {
      primary: "#f73365",
      secondary: "#8057bd",
      secondaryDark: "#4F317D",
      white: "#fff",
      black: "#000",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </ThemeProvider>
  );
}
