
import './App.css';
import Address from './component/profile/Address';
import Fullname from './component/profile/Fullname';
import ProfilPhoto from './component/profile/ProfilPhoto';


function App() {
  return (
    <div className="App">
      <ProfilPhoto/>
      <Fullname/>
      <Address/>
    </div>
  );
}

export default App;
