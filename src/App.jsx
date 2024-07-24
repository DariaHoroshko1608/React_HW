import Collapse from "./components/Collapse";

function App() {
    const text = 'collapse me';

    return (
        <div className="container mt-3">
            <Collapse text={text} opened={false} />
        </div>
    );
}

export default App;
