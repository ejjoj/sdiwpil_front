import {BrowserRouter as Router} from 'react-router-dom';

import 'jquery/dist/jquery.min';
import 'bootstrap/js/dist/collapse';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './styles/App.scss';

import Header from "./components/Header";
import Pages from "./components/Pages";

const App = () => {
  return (
    <Router>

      <div className="container container-fullHD">
        <div className="row">
          <div className="container">
            <div className="row">
              <Header />
              <Pages />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
