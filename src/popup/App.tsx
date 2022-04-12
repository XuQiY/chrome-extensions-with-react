import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {injectScriptToCurActiveWindow()}, [])

  const injectScriptToCurActiveWindow = async () => {
    // get active tab
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    // execute Script
    chrome.scripting.executeScript({
      args: ['Chrome Extension'],
      func: (params) => console.log(`hello from ${params}`),
      target: { tabId: tab.id as number },
    })
  }
  return <div>Hello Chrome Extension</div>
}

export default App
