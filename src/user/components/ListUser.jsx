import { useEffect, useState } from "react";
import { apiUser } from "../api/apiUser"
import { User } from "../models/user.models";
import { EditUser } from "./EditUser";

export const ListUser = () => {

    //Estado de usuarios en la lista de forma independiente
    const [listUsers, setListUsers] = useState([]);
    const [user, setUser] = useState(User);
    const [showModal, setShowModal] = useState(false);

    const viewUserList = async () => {
        const getListUsersFromAPI = await apiUser();
        setListUsers(getListUsersFromAPI);
    }

    const handleOpenModal = (e) => {
        setShowModal(true);
        setUser(e);
    }

    const handleCloseModal = () => setShowModal(false);


    //UseEffect crea efectos secundarios, en este caso al momento de renderizar
    //
    useEffect(() => {
        viewUserList();
    }, [showModal])

    return (
        <>
            <h2>Lista de usuarios</h2>
            <hr />
            <div className="container">

                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"># (ID)</th>
                                <th scope="col">UserName</th>
                                <th scope="col">Email</th>
                                <th scope="col">Role</th>
                                <th scope="col">Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listUsers.map((u) => {
                                return (
                                    <tr key={u._id}>
                                        <th scope="row">{u._id}</th>
                                        <td>{u.username}</td>
                                        <td>{u.email}</td>
                                        <td>{u.rol}</td>
                                        <th>
                                            <button className="btn btn-info ms-2">
                                                Ver
                                            </button>
                                            <button className="btn btn-warning ms-2"
                                                onClick={(e) => handleOpenModal(e)}>
                                                Editar
                                            </button>
                                            <button className="btn btn-danger ms-2">
                                                Eliminar
                                            </button>
                                        </th>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <EditUser
                    isOpenModal={showModal}
                    isCloseModal={handleCloseModal}
                    userEdit={user}>

                </EditUser>
            </div>

        </>
    )
}
