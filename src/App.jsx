import { AppProvider } from "./context/AppContext";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import Topbar from "./components/Topbar";
import QuickCapture from "./components/QuickCapture";
import SpotlightSearch from "./components/SpotlightSearch";
import "./styles/theme.css";

function App() {
  return (
    <AppProvider>
      <div className="app">
        <Sidebar />
        <div className="main">
          <Topbar />
          <Editor />
        </div>
        <QuickCapture />
        <SpotlightSearch />
      </div>
    </AppProvider>
  );
}

export default App;
