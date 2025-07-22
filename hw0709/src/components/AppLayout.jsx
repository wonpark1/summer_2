import { Outlet } from "react-router-dom";
import Header from "./Header";
import TabBar from "./TabBar";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 2rem 1rem;
`;

function AppLayout() {
  return (
    <>
      <Header />
      <Container>
        <TabBar />
        <Outlet />
      </Container>
    </>
  );
}

export default AppLayout;
