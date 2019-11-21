import React from 'react';
import './App.css';
import Placeholder from './components/Placeholder';


class App extends React.Component {
  render () {
    return (
      <div>
        <div className="wrapper1">
          <div className="newdiv1">
            <h3 className="titlemain">Long Reads</h3>
            <hr/>
            <a>See All</a>
          </div>
        </div>
          <div className="container1">
            <Placeholder
              image="https://api.adorable.io/avatars/150/abott@adorable.png"
              title="Title 1"
            />
            <Placeholder
              image="https://api.adorable.io/avatars/150/waterfall.png"
              title="Title 2"
            />
            <Placeholder
              image="https://api.adorable.io/avatars/150/yoshimitsu.png"
              title="Title 3"
            />
            <Placeholder
              image="https://api.adorable.io/avatars/150/eric.png"
              title="Title 4"
            />
            <Placeholder
              image="https://api.adorable.io/avatars/150/tears.png"
              title="Title 5"
            />
          </div>
        <div className="wrapper2">
          <div className="newdiv2">
            <h3 className="titlemain">Long Reads</h3>
            <hr/>
            <a>See All</a>
          </div>
        </div>
          <div className="container2">
            <Placeholder
              image="https://api.adorable.io/avatars/150/abott@adorable.png"
              title="Title 1"
            />
            <Placeholder
              image="https://api.adorable.io/avatars/150/waterfall.png"
              title="Title 2"
            />
            <Placeholder
              image="https://api.adorable.io/avatars/150/yoshimitsu.png"
              title="Title 3"
            />
            <Placeholder
              image="https://api.adorable.io/avatars/150/eric.png"
              title="Title 4"
            />
            <Placeholder
              image="https://api.adorable.io/avatars/150/tears.png"
              title="Title 5"
            />
          </div>
        </div>
    );
  }
}

export default App;
