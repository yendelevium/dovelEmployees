// Global state
import {create} from "zustand"

export const useEmployeeStore = create((set)=>({
    employees:[],
    setEmployee : (employees)=>set({employees}),
    createEmployee: async (newEmployee)=>{
        if(!newEmployee.empId || !newEmployee.name || !newEmployee.salary || !newEmployee.position){
            return {
                success:false,
                message:"Fill out all the fields"
            }
        }
        const res = await fetch("/api/employees",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(newEmployee)
        })
        const data=await res.json()
        set(prevState=>({ employees:[...prevState.employees, data.data]} ))
        return {success:true, message:"Employee added successfully"}
    },
    getEmployees : async ()=>{
        console.log("RAN")
        const res=await fetch("/api/employees",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data = await res.json()
        set({employees:data.data})
    }
}))