import { User } from "../models/user.models"
import { FormUser } from "./FormUser"


export const CreateUser = () => {
    return (
        <>
            <div className="container">
                <h1>CreateUser</h1>
                <FormUser userProp={User}
                    titleButton={'Crear Usuario'}
                    option={1} />
            </div>
        </>
    )
}
