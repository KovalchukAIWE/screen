import Container from "./Container/Container";
import List from "./List/List";
import styles from "./App.module.css";

function App() {
  return (
    <Container>
      <div className={styles.app}>
        <h2 className={styles.app__title}>My apps</h2>
        <List />
      </div>
    </Container>
  );
}

export default App;
