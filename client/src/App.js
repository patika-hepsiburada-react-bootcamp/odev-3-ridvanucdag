import "./App.css";
import Container from "./components/Container";
import { SeriesofvotesProvider } from "./context/Option";

function App() {
  return (

    <SeriesofvotesProvider>

      <Container />
      
    </SeriesofvotesProvider>
    
  );
}

export default App;
