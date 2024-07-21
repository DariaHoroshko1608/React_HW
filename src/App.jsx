import Slider from "./components/Slider";

const images = [
    '/images/first.jpeg',
    '/images/second.jpeg',
    '/images/third.jpeg'
];

function App() {
    return (
        <div className="App">
            <Slider images={images} />
        </div>
    );
}

export default App;
