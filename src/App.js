import { useState , useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async() => {
      const serverTasks = await fetchTasks()
      setTasks(serverTasks)
    }

    getTasks()
  }, [])

  const fetchTasks = async () =>{
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  const fetchTask = async (id) =>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  const toggleReminder = async (id)=>{
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      'method' : 'PUT',
      'headers' : {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task)=>task.id === id ? 
    {...task, reminder: data.reminder}: task))
  }

  const addTask = async (task)=>{
    const res = await fetch('http://localhost:5000/tasks', {
      'method' : 'POST',
      'headers' : {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data])
  }

  const deleteTask = async (id)=>{
    await fetch(`http://localhost:5000/tasks/${id}`, {
      'method' : 'DELETE',
    })

    setTasks(tasks.filter((task)=>task.id !== id))
  }

  return (
    <Router>
    <div className="container">
    <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask} title='Task Tracker'/>
      <Routes>
        <Route path='/' element={
          <>
            {showAddTask && <AddTask onAdd={addTask}/>}
            { tasks.length ? (
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
            ) :
            (
              'No tasks avialable'
            ) }
          </>
      } />

      <Route path='/about' element={<About />} />
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}
 
export default App;