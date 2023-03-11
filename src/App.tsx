import {ConfigProvider, Spin, theme} from "antd";
import "./App.css";
import AuthCard from "./components/AuthCard";
import {Toaster} from "./components/Toaster";
import Dashboard from "./pages/Dashboard";
import {useUserContext} from "./utils/context/userContext";

function App() {
  const {isLoading, error, user} = useUserContext();
  console.log({isLoading, error, user});

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
          <>
            {error && Toaster("error", error)}
            {isLoading ? (
              <Spin size="large" />
            ) : (
              <>{user ? <Dashboard /> : <AuthCard />}</>
            )}
          </>
        </header>
      </div>
    </ConfigProvider>
  );
}

export default App;
