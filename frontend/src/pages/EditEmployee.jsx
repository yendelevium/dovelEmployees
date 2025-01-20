import EmployeeForm from '../components/EmployeeForm'
import React from 'react'
import { useLocation } from 'react-router-dom';

const EditEmployee = () => {
    // The "props" are in location.state
    const location = useLocation();
    return (
        <EmployeeForm {...location.state}/>
    )
}

export default EditEmployee