import Container from "../components/Container";
import Frame from "../components/Frame";
import Modal from "../components/Modal";
import "../styles/index.css";

function App() {
  return (
    <>
      <Container>
        <Frame>
          <Modal />
        </Frame>
      </Container>
    </>
  );
}

export default App;
