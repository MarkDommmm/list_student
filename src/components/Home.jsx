import React, { Component } from 'react'
import InfoStudens from './InfoStudents/InfoStudens'
import AddStudens from './AddStudents/AddStudens'
import CardStudents from './CardStudents/CardStudents'

export default class Home extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-7 grid-margin stretch-card">
                    <div className="card">
                        {/* START CONTROL */}
                        <AddStudens />
                        {/* END CONTROL */}
                        {/* START LIST STUDENT */}
                        {/* <CardStudents /> */} 
                        {/* END LIST STUDENT */}
                    </div>
                </div>
                {/* START FORM SINH VIEN */}
                <InfoStudens />
                {/* END FORM SINH VIÊN */}
            </div>

        )
    }
}
