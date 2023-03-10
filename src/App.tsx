import {ConfigProvider, theme} from "antd";
import "./App.css";
import AuthCard from "./components/AuthCard";
import {useUserContext} from "./utils/context/userContext";

function App() {
  const {isLoading, error, user} = useUserContext();
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#54d2bc",
        },
        algorithm: theme.darkAlgorithm,
      }}
    >
      <div className="App">
        <header className="App-header">
          <AuthCard />
        </header>
      </div>
    </ConfigProvider>
  );
}

export default App;
