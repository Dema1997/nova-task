import { NominatePeerForm, NominationsList } from "./components";
import styled from "styled-components";

const Container = styled.div`
  width: 70vw;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

function App() {
  return (
    <Container>
      <NominatePeerForm />
      <NominationsList />
    </Container>
  );
}

export default App;
