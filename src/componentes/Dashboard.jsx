import React from 'react'
import UserTable from './UserTable'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <div className="row margin_0 row_dashboard">
                <div className="col-md-6">
                    <div className="div_user_title">Users</div> 
                    </div>
                <div className="col-md-6">
                    <div className="float_right">
                    <Link className="btn btn-success" to={"/add-user"}>Add user</Link>
                    </div>
                    
                </div>
                <UserTable />
            </div>
        </div>
    )
}

export default Dashboard;