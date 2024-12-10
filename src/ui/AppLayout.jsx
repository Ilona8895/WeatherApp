import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  height: 100dvh;
  grid-template-rows: auto 1fr auto;
`;

const Main = styled.main`
  max-width: 72rem;
  margin: 0 auto;
`;
const Container = styled.div`
  padding: 4rem 4.8rem 6.4rem;

  /* overflow-y: scroll; */
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Container>
        <Main>
          <Outlet />
        </Main>
      </Container>
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
