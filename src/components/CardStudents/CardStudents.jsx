
import React, { useState } from 'react'

function CardStudents(props) {
const [arrList,setArrList] = useState(props)
    const handleDelete = (i) => {
        // const data = [...props.data]
        // data.splice(i, 1)
        // setData({ data })
        // console.log(data);
        console.log(arrList);
    }
    return (

        <div className="card-body">
            <h3 className="card-title">Danh sách sinh viên</h3>
            <div className="table-responsive pt-3">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Mã sinh viên</th>
                            <th>Tên sinh viên</th>
                            <th>Tuổi</th>
                            <th>Giới tính</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>

                        {props.data.map((e, i) => (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{e.code}</td>
                                <td>{e.name}</td>
                                <td>{e.age}</td>
                                <td>{e.gender}</td>
                                <td>
                                    <div className="template-demo">
                                        <button
                                            type="button"
                                            className="btn btn-warning btn-icon-text">
                                            Sửa
                                        </button>
                                        <button
                                            onClick={handleDelete}
                                            type="button"
                                            className="btn btn-success btn-icon-text">
                                            Xóa
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default CardStudents 