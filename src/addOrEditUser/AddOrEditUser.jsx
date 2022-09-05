import { useNavigate, useParams } from "react-router-dom";

const AddOrEditUser = () => {
    const { userId } = useParams();
    const navigate = useNavigate();

    return (
        <section className="container form-section">
            <article className="row">
                <section className="col-12">
                    <article>
                        <h4>
                            {userId ? 'ویرایش' : 'افزودن'} کاربر
                        </h4>

                        <form>
                            <article className="name">
                                <label>
                                    نام و نام خانوادگی
                                </label>
                                <input type="text" id="name_input"></input>
                            </article>

                            <article className="user-name">
                                <label>
                                    نام کاربری
                                </label>
                                <input type="text" id="username_input"></input>
                            </article>

                            <article className="email">
                                <label>
                                    ایمیل
                                </label>
                                <input type="text" id="email_input"></input>
                            </article>

                            <article>
                                <button className="add-edit-btn">
                                    {userId ? 'ویرایش' : 'افزودن'}
                                </button>

                                <button className="back-btn" onClick={() => { navigate('/') }}>
                                    بازگشت
                                </button>
                            </article>
                        </form>
                    </article>
                </section>
            </article>
        </section>
    );
}

export default AddOrEditUser;