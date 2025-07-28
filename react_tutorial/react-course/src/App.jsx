import React from 'react'
import HomePage from './pages/HomePage.jsx'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import JobsPage from './pages/JobsPage.jsx'
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage.jsx'
import AddJobPage from './pages/AddJobPage.jsx'


const App = ()=>{
  // Add new job
  const addJob = async (newJob)=>{
    const res = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    }, )
    return;
  }

  //Delete Job
  const deleteJob = async (id)=> {
      const res = await fetch(`/api/${id}`, {
        method: 'DELETE',
      }, )
      return;
}
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>} />
      <Route path ='jobs' element={<JobsPage/>}/>
      <Route path ='add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
      <Route path ='jobs/:id' element={<JobPage deleteJob={deleteJob}/>}
        loader={jobLoader}/>
      <Route path='*' element={<NotFoundPage/>}/>
  
  
  
    </Route>
  )
  )
  return (
  <RouterProvider router={router}/>
  

)}

export default App