import React from 'react';
import CardViewer from './CardViewer';

const App = () => {
    const recipes = [ { i: 2, o: 3, c: 2 }, { i: 2, o: 3, c: 2 }, { i: 2, o: 3, c: 2 } ];
    return (
        <div>
            <CardViewer recipes={recipes} />
        </div>
    );
};

export default App;
