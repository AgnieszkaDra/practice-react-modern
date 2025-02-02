import React from 'react';
import Box from './Box';
import TextContext from '../context';

class App extends React.Component {
    state = {
        text: 'React HelloWorld Modern!',
    };

    render() {
        const { text } = this.state;
        // const {Provider} = TextContext;

        return (
            <TextContext.Provider value={text}>
                <Box />;
            </TextContext.Provider>
        ) 
    }
}

export default App;