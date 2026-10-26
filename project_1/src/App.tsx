import './App.css'
import EmojiFinder from './components/EmojiFinder'

function App() {
  return (
    <>
      <header className="header">
        <h1 className="title">Emoji Finder</h1>
        <p className="subtitle">Find emoji by keywords</p>
      </header>
      <EmojiFinder />
    </>
  )
}

export default App
