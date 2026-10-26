import Greeting from './components/Greeting.tsx'
import TaskList from './components/TaskList.tsx'
import ActionButton from './components/ActionButton.tsx'
import ProfileCard from './components/ProfileCard.tsx'
import ImageGallery from './components/ImageGallery.tsx'
import './App.css'

function App() {
  return (
    <>
      <Greeting />
      <TaskList />
      <ActionButton />
      <ProfileCard />
      <ImageGallery />
    </>
  )
}

export default App
