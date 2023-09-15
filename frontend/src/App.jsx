import React from 'react';

import HomeRoute from './components/HomeRoute';
import './App.scss';

// Import mock data
import photos from './mocks/photos';
import topics from './mocks/topics';

// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} />
    </div>
  );
};

export default App;
