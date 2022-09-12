import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from 'axios';

const Users = () => {

    const [users, setUsers] = useState([]);
    const [mainUsers, setMainUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            setUsers(res.data);
            setMainUsers(res.data);

        }).catch(error => console.log(error));
    }, []);

    const handleDeletAlert = (userId) => {
        Swal.fire({
            title: 'حذف کاربر',
            text: `میخوای کاربر ${userId} رو حذف کنی ؟`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'حذف میکنم'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`).then(res => {
                    let newUsers = users.filter(u => u.id !== userId);

                    setUsers(newUsers);

                    Swal.fire(
                        'حذف شد!',
                        'کاربر مورد نظرت حذف شد',
                        'success'
                    )
                })
            }
        })
    }

    return (
        <section className="container users-section">
            <article className="row">
                <section className="col-12">
                    <h4>
                        مدیریت کاربران
                    </h4>

                    <article className="users-search">
                        <input type="text" onChange={(e) => { setUsers(mainUsers.filter(u => u.name.includes(e.target.value))) }}></input>
                        <Link to={'/user/add'}>
                            <button>+</button>
                        </Link>
                    </article>

                    <article className="users-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>نام</th>
                                    <th>نام کاربری</th>
                                    <th>ایمیل</th>
                                    <th>عملیات</th>
                                </tr>
                            </thead>
                            {users.length ? (
                                <tbody>
                                    {users.map(user => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td className="operation-icon">
                                                <Link to={`/user/edit/${user.id}`}>
                                                    <i className="fa fa-edit"></i>
                                                </Link>

                                                <i className="fa fa-trash" onClick={() => { handleDeletAlert(user.id) }}></i>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            ) : (
                                <tbody className="loader-parent">
                                    <div className="lds-facebook">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </tbody>
                            )}
                        </table>
                    </article>
                </section>
            </article>
        </section>
    );
};

export default Users;