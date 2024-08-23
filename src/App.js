
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/src/collection/Nature.jpg')" }}>
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div class="text-center lg:w-5/12 w-full">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            File taxes for your NGO in a fast and easy way
          </h1>
          <p className="text-base">
            Fill out questions get your taxes done with AI generated forms and get your taxes done in minutes.
          </p>
        </div>
      </div>
    </div >
  );
}

export default App;
