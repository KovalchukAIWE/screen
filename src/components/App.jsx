import Container from "./Container/Container";
import List from "./List/List";
import styles from "./App.module.css";

function App() {
  return (
    <Container>
      <h2 className={styles.appTitle}>My apps</h2>
      <List />
    </Container>
  );
}

export default App;
