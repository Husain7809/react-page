import './App.css';
import './style.css';
import Chat from './chat/Chat';
import Header from './header/Header';
import NavBar from './navbar/NavBar';
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
        <div>
          <Header className="col-span-12" />
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <div className="grid grid-cols-6">
                <div className="lg:col-span-1 sm:col-span-6 col-span-6">
                  <NavBar />
                </div>
                <div className="lg:col-span-5 sm:col-span-6 col-span-6">
                  <Chat />
                </div>
              </div>
            </div>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
