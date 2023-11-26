import './App.css';
import Navbar from './components/Navbar'
import News from './components/News'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

const App = ()=>{

  const api_key = process.env.REACT_APP_NEWS_API

    return(
      <>
      <div>
      <Router>
      <Navbar/>
      <Routes>
      <Route exect path="/" element={<News key="general" api_key={api_key} pageSize={12} category="general" country="in"/>} />
      <Route exect path="/business" element={<News key="business" api_key={api_key} pageSize={12} category="business" country="in"/>} />
      <Route exect path="/entertainment" element={<News key="entertainment" api_key={api_key} pageSize={12} category="entertainment" country="in"/>} />
      <Route exect path="/general" element={<News key="general" api_key={api_key} pageSize={12} category="general" country="in"/>} />
      <Route exect path="/health" element={<News key="health" api_key={api_key} pageSize={12} category="health" country="in"/>} />
      <Route exect path="/science" element={<News key="science" api_key={api_key} pageSize={12} category="science" country="in"/>} />
      <Route exect path="/sports" element={<News key="sports" api_key={api_key} pageSize={12} category="sports" country="in"/>} />
      <Route exect path="/technology" element={<News key="technology" api_key={api_key} pageSize={12} category="technology" country="in"/>} />
      </Routes>
      </Router>
      </div>
      </>
    )
  }

  export default App

