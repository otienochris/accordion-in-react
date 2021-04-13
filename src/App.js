import "./App.css";
import Questions from "./Questions";

function App() {
  return (
    <main>
      <div className="container">
        <div className="section">
          <h3 className="topic">Question and answers</h3>
          <div className="questions">
            <Questions />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
