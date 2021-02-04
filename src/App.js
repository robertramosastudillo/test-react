import { Provider } from "react-redux";
import UserList from "./components/UserList";
import Navbar from "./layout/Navbar";

import store from "./redux/store";
import { Container } from "./styles";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Container>
          <UserList />
        </Container>
      </Provider>
    </>
  );
}

export default App;
