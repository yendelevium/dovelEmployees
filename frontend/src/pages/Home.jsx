import EmployeeList from "../components/EmployeeList"
import { useLocation, useParams } from "react-router-dom"
import { Toaster, toaster } from "../components/ui/toaster"
import React from "react"

const Home = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const success = searchParams.get("success")
  const message = searchParams.get("message")

  // useEffect so the page re-renders when success value changes and the toast is created
  React.useEffect(() => {
    if (success) {
      toaster.create({
        description: `Successfull ${message} employee`,
        type: "success",
      });
    }
  }, [success]);
  return (
    <>
    <EmployeeList />
    <Toaster/>
    </>
  )
}

export default Home