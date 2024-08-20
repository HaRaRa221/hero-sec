import Nature from './collection/Nature.jpg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="w-screen h-screen text-white" style={{
      background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
    }}>
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center" alt="hero" src={Nature} />
        <div class="text-center lg:w-5/12 w-full">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            File taxes for your NGO in a fast and easy way
          </h1>
          <p className="text-base">
            Fill out questions get your taxes done with AI generated forms and get your taxes done in minutes.
          </p>
          <div className="flex justify-center mx-auto">
            <button
              className="hover:underline bg-green-200 text-gray-800 font-bold rounded-full  py-4 px-8">
              Open Chatbot
            </button>
            <button
              className="ml-4 hover:underline bg-green-200 text-gray-800 font-bold rounded-full  py-4 px-8">
              About TaxBot
            </button>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
