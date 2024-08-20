import Robot from './collection/Robot.jpg';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col" style={{
      background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
    }}>
      <div className="container mx-auto flex px-5 ps-24 items-center justify-center flex-col ">

        <img src={Robot} className="w-1/3" alt="Robot" />
      </div>
      
     
    </div >
  );
}

export default App;
