import { Link } from "react-router-dom";

const Users = () => {
    return (
        <section className="container users-section">
            <article className="row">
                <section className="col-12">
                    <h4>
                        مدیریت کاربران
                    </h4>

                    <article className="users-search">
                        <input type="text"></input>
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
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Milad Raouf</td>
                                    <td>Milad</td>
                                    <td>milad@gmail.com</td>
                                    <td className="operation-icon">
                                        <Link to={'/user/edit/3'}>
                                            <i className="fa fa-edit"></i>
                                        </Link>
                                        <i className="fa fa-trash"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </article>
                </section>
            </article>
        </section>
    );
};

export default Users;