import type {Component} from 'solid-js';
import Hero from "./components/Hero";

const App: Component = () => {
    return (
        <div class='pt-14 desk:pt-10 desk:pb-20 pb-14 h-full'>
            <Hero/>
        </div>

    );
};

export default App;
