import { CssBaseline, ThemeProvider } from '@mui/material'
import { useState } from 'react';
import { FlatDashboardContext } from './context'
import AppRouter from './router/AppRouter'
import theme from './themes'

function App() {

  const [isFlatDashboardOpen, setIsFlatDashboardOpen] = useState(false);
  const [selectedFlat, setSelectedFlat] = useState(null);
  const [isBuildingDashAcitve, setIsBuildingDashActive] = useState(false);
  const [lastBuilding, setLastBuilding] = useState(null);

  return (
    <FlatDashboardContext.Provider value={{
      isFlatDashboardOpen,
      setIsFlatDashboardOpen,
      selectedFlat,
      setSelectedFlat,
      isBuildingDashAcitve, 
      setIsBuildingDashActive,
      lastBuilding, 
      setLastBuilding,
    }}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <AppRouter/>
      </ThemeProvider>
    </FlatDashboardContext.Provider>
  )
}

export default App
