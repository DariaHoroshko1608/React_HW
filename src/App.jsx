import Card from "./components/Card";


function App() {
    return (
        <div className="container">
            <Card title="Hi" />
            <Card text="How are you?" />
            <Card title="Hi" text="How are you?" />
        </div>
    );
}

export default App;
