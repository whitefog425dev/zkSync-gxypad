import { Helmet } from "react-helmet";
import Launchpad from "./components/Launchpad";

function App() {
  return (
    <div className="App">
      <Helmet>
        <script src="./assets/js/mian.js" type="text/javascript" />
      </Helmet>
      <Launchpad />
      <Helmet>
        <script src="./assets/js/app.js" type="text/javascript" />
      </Helmet>
    </div>
  );
}

export default App;
