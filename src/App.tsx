// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { DataTable } from './components/table'
import { TanstackTable } from './components/tanstackTable'
import {DialogBox} from './components/DialogBox'
function App() {
  return (
    <>
      <DialogBox />
      <TanstackTable />
      <DataTable />
    </>
  )
}

export default App
