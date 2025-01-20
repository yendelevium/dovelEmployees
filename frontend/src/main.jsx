import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "./components/ui/provider"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Container } from "@chakra-ui/react"

import Home from './pages/Home'
import AddEmployee from './pages/AddEmployee'
import EditEmployee from './pages/EditEmployee'
import EmployeeDetails from './pages/EmployeeDetails'
import Navbar from './components/Navbar'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:'/new',
    element: <AddEmployee />
  },
  {
    path:"/:empId",
    element:<EmployeeDetails />
  },
  {
    path:"/:empId/edit",
    element:<EditEmployee />
  }
  // Add an Error route & component
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <Container>
        <Navbar />
        <RouterProvider router={router} />
      </Container>
    </Provider>
  </StrictMode>,
)
