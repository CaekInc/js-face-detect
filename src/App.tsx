import type {Component} from 'solid-js';
import Hero from "./components/Hero";
import Examples from "./components/Examples.jsx";

const App: Component = () => {
    return (
        <div class='pt-14 desk:pt-10 desk:pb-20 pb-14 desk:mx-40 h-full'>
            <Hero/>
            <Examples/>
        </div>

    );
};

export default App;
