import Container from "../components/Container";
import Frame from "../components/Frame";
import Modal from "../components/Modal";
import PopupButton from "../components/PopupButton";
import "../styles/index.css";

function App() {
  return (
    <>
      <Container>
        <Frame>
          <PopupButton />
        </Frame>
      </Container>
    </>
  );
}

export default App;
