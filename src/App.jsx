import './App.css'
import About from "./pages/About/About.jsx";
import Header from './components/Header/Header.jsx';
import ScheduleForm from './components/ScheduleForm/ScheduleForm.jsx';
import CalendarUi from './components/Calendar/CalendarUi.jsx';

function App() {
  return (
    <>
      <About />
      <ScheduleForm />
      {/* <CalendarUi /> */}
    </>
  )
}

export default App
