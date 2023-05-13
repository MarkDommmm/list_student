import React, { useState } from 'react'
import CardStudents from '../CardStudents/CardStudents'

function InfoStudens() {
    const [code, setCode] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('Male')
    const [birth, setBirth] = useState('')


    const [datas, setData] = useState([])
    const [user, setUser] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        let data =
        {
            code: code,
            name: name,
            age: age,
            gender: gender,
            birth: birth,
        }
        setData([...datas, data])
    }

    return (
        <div>
            <CardStudents data={datas} />
            <div div className="col-5 grid-margin" >
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Thông tin sinh viên</h3>

                        <form className="form-sample" onSubmit={handleSubmit}>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                                <div className="col-sm-9">
                                    <input
                                        onChange={(e) => { setCode(e.target.value) }}
                                        value={code}
                                        name='code'
                                        type="text"
                                        className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                                <div className="col-sm-9">
                                    <input
                                        onChange={(e) => { setName(e.target.value) }}
                                        value={name}
                                        name='name'
                                        type="text"
                                        className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Tuổi</label>
                                <div className="col-sm-9">
                                    <input
                                        onChange={(e) => { setAge(e.target.value) }}
                                        value={age}

                                        name='age'

                                        type="text"
                                        className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Giới tính</label>
                                <div className="col-sm-9">

                                    <select
                                        value={gender}
                                        name='gender'
                                        className="form-control"
                                        onChange={(e) => { setGender(e.target.value) }} >
                                        <option value='male'>Nam</option>
                                        <option value='female'>Nữ</option>
                                    </select>
                                </div>
                            </div>
                        
                            <button type="submit" className="btn btn-primary me-2">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default InfoStudens