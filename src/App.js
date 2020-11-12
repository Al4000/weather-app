import React from 'react'
import Wrapper from './components/Wrapper'
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Wrapper />
      </ThemeProvider>
    </div>
  )
}

export default App
