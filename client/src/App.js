import styled from "@emotion/styled";
import { darkTheme } from "./utils/Theme";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 3;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Wrapper>
          <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/post" element={<CreatePost/>} exact/>
            
          </Routes>
          </BrowserRouter>
          
          <Home/>
          <CreatePost />
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;