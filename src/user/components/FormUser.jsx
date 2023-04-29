import { useState } from "react";
import { useForm } from "react-hook-form";
import { formOptions, formUserHelper } from "../helpers/formUserHelper";
import { useEffect } from "react";

//userProp es mi modelo
export const FormUser = ({ userProp, titleButton, option }) => {
    const [user, setUser] = useState(userProp);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(formOptions)

    useEffect(() => {
        setUser({ ...user, password: "" });
    }, [])

    const crud = async () => {
        await formUserHelper(user, option);
    }

    return (
        <>
            <form onSubmit={handleSubmit(crud)}>
                <div className="mb-3">
                    <label className="col-form-label">Nombre usuario:</label>
                    <input type="text"
                        {...register('username')}
                        className="form-control"
                        id="user"
                        value={user.username}
                        onChange={({ target: { value } }) => {
                            setUser( () => ({...user, username: value}))
                        }}
                        required
                    />

                    {errors.username && (<span> {errors.username.message} </span>)}
                </div>

                <div className="mb-3">
                    <label className="col-form-label">Correo Electronico:</label>
                    <input type="email"
                        {...register('email')}
                        className="form-control"
                        id="email"
                        value={user.email}
                        onChange={({ target: { value } }) => {
                            setUser( () => ({...user, email: value}))
                        }}
                        required
                    />
                    {errors.email && (<span> {errors.email.message} </span>)}
                </div>
                <div className="mb-3">
                    <label className="col-form-label">Password:</label>
                    <input type="password"
                        {...register('password')}
                        className="form-control"
                        id="password"
                        value={user.password}
                        onChange={({ target: { value } }) => {
                            setUser( () => ({...user, password: value}))
                        }}
                        required
                    />
                    {errors.password && (<span> {errors.password.message} </span>)}
                </div>

                <button type="submit" className="btn btn-primary">{titleButton}</button>
            </form>
        </>
    )
}
