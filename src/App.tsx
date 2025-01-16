import { useState } from 'react'
import { Heading, Box, Center, AbsoluteCenter, Theme, Color } from "@chakra-ui/react"
import { ColorModeProvider } from "./components/ui/color-mode"
import BackgroundPattern from "./components/background-pattern"
import TestButton from './components/test'


function App() {

  return (
    <Box bgColor='blackAlpha.900' width='100vw' height='100vh'>    
      <AbsoluteCenter>
        <TestButton/>
      </AbsoluteCenter>
      </Box>

  )
}

export default App
