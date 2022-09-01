const AddOrEditUser = () => {
    return (
        <section class="container form-section">
            <article class="row">
                <section class="col-12">
                    <article>
                        <h4>
                            افزودن کاربر
                        </h4>

                        <form>
                            <article className="name">
                                <label for="name_input">
                                    نام و نام خانوادگی
                                </label>
                                <input type="text" id="name_input"></input>
                            </article>

                            <article className="user-name">
                                <label for="username_input">
                                    نام کاربری
                                </label>
                                <input type="text" id="username_input"></input>
                            </article>

                            <article className="email">
                                <label for="email_input">
                                    ایمیل
                                </label>
                                <input type="text" id="email_input"></input>
                            </article>

                            <article>
                                <button className="add-edit-btn">
                                    افزودن
                                </button>

                                <button className="back-btn">
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