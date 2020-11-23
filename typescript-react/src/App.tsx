import * as React from 'react'
import Logo from './logo.svg'
import Name from './Name'

class App extends React.Component<{}, void> {
  render() {
    return (
      <div className="App">
        <Logo style={{ width: '100px' }} />
        Hello
        <Name name="world" />
        !
      </div>
    );
  }
}

export default App
