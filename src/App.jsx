import { AppHeader } from "./components/AppHeader";
import { AppLayout } from "./components/AppLayout";
import { AppCard } from "./components/AppCard";


import "./App.css";

function App() {
  return (
    <AppLayout>
      <AppHeader />
      <div className="content">
        <AppCard />
      </div>
    </AppLayout>
  );
}

export default App;
