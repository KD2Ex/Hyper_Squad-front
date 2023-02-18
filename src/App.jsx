import { CssBaseline, ThemeProvider } from '@mui/material'
import { useState } from 'react';
import { FlatDashboardContext } from './context'
import AppRouter from './router/AppRouter'
import theme from './themes'

function App() {

  const [isFlatDashboardOpen, setIsFlatDashboardOpen] = useState(false);
  

  return (
    <FlatDashboardContext.Provider value={{
      isFlatDashboardOpen,
      setIsFlatDashboardOpen,
    }}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <AppRouter/>
      </ThemeProvider>
    </FlatDashboardContext.Provider>
  )
}

export default App
