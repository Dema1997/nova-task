import { NominatePeerForm, NominationsList } from "./components";
import { nominationsMockdata } from "./data";

const appContainer: React.CSSProperties = {
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
};
const container: React.CSSProperties = {
  width: "70%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
};

function App() {
  return (
    <div style={appContainer}>
      <div style={container}>
        <NominatePeerForm />
        <NominationsList items={nominationsMockdata} />
      </div>
    </div>
  );
}

export default App;
