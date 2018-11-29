import React, { Component } from 'react';
import RenderPlayers from './players';
import NewPlayerForm from './newPlayerForm';

import 'antd/dist/antd.css';

class App extends Component {
    render() {
        return (
            <div>
                <RenderPlayers />
                <NewPlayerForm />
            </div>
        );
    }
}

export default App;