import { useState } from 'react'
import { Heading, Box, Center, AbsoluteCenter, Theme, Color } from "@chakra-ui/react"
import { ColorModeProvider } from "./components/ui/color-mode"


function App() {

  return (
    <>

      <AbsoluteCenter>
      <Box bg="red.200" bgSize="cover"/>
        <Heading size="6xl" color={'blue'}>
          Hello
        </Heading>
      </AbsoluteCenter>
    </>
  )
}

export default App
