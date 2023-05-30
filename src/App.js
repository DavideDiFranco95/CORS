import { useNavigate } from "react-router-dom";

const fetchApi = async () => {
  console.log("You have clicked the button!");
  let navigate = useNavigate();
    const routeChange = () =>{
      let path = "http://localhost:8080";
      navigate(path);
}

function App() {
  return (
    <div className="App">
      <button id="clickMe" onClick={fetchApi}>8080</button>
    </div>
  );
}
export default App;