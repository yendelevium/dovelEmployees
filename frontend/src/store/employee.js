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
        // Updating the ENTIRE state, so getEmployees also gets updated, so the home-page re-renders
        set(prevState=>({ employees:[...prevState.employees, data.data]} ))
        console.log(data.success)
        return {success:data.success, message:data.message || "Employee added successfully"}
    },

    getEmployees : async ()=>{
        const res=await fetch("/api/employees",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data = await res.json()
        // ONLY UPDATE THE employees state(to prevent infinte rendering)
        set({employees:data.data})
    },

    deleteEmployee : async(empId)=>{
        const res = await fetch(`/api/employees/${empId}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data  = await res.json()
        if (data.success){
            set(prevState =>({
                employees : prevState.employees.filter((employee)=>employee.empId!=empId)
            }))
            return {success:true, message:"Employee deleted successfully"}
        }else{
            return {success:false, message:data.message}
        }
    },

    editEmployee : async(editedEmployee)=>{
        const res = await fetch(`/api/employees/${editedEmployee.empId}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(editedEmployee)
        })
        const data = await res.json()
        if (data.success){
            set(prevState=>({
                employees:prevState.employees.map((employee)=>{
                    if(employee.empID==editedEmployee.empID){
                        return editedEmployee
                    }
                    return employee
                })
            }))
            return {success:true, message:"Employee Update Successfully"}
        }else{
            return {success:false, message:data.message}
        }
    }
}))