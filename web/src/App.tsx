import Header from "./components/header";
import Content from "./components/content";

function App() {
  return (
    <div className="min-h-screen w-screen flex flex-col overflow-x-hidden">
      <Header />
      <Content />
    </div>
  );
}

export default App;
