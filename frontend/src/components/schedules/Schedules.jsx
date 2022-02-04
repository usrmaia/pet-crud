import Main from "./../tamplate/Main"
import axios from "axios"
import { useEffect, useState } from "react"
import { parse } from "ipaddr.js"

const baseURL = "http://localhost:3001/users"
const baseURL_sc = "http://localhost:3001/schedules"

const headerProps = {
    icon: "calendar",
    title: "Agendamento",
    subtitle: "Agendamento: CRUD"
}

const initialState = {id_cliente: "", horario: "", motivo: ""}

export default function UserCRUD(){
    const [user_sc, setUser] = useState(initialState)
    const [userList_sc, setItems] = useState([])
    const [user, setItems_cliente] = useState()
    //const [userList, setItems_cliente] = useState([])

    useEffect(() => {
        const getAllUsers = async () => {
            const allUsers = await retrieveUSers()
            if(allUsers) setItems(allUsers)
        }
        getAllUsers()
    }, [])

    const retrieveUSers = async () => {
        try{
            const response = await axios.get(baseURL_sc)
            return response.data
        }catch(error){
            alert(error)
        }
    }

    const load = (user) => {
        setUser(user)
    }

    const remove = (userSelected) => {
        axios.delete(`${baseURL_sc}/${userSelected.id}`)
            .then(resp => {
                const newList = userList_sc.filter(user => user !== userSelected)
                setItems(newList)
            })
    }

    const save = () => {
        if(user_sc.id_cliente === "" || user_sc.horario === "" || user_sc.motivo === ""){
            alert("Preencha os campos obrigatórios!")
            return
        }
        
        try {
            const response = axios.get(`${baseURL}/${user_sc.id_cliente}`)
                .then(resp => {
                    console.log(resp)
                    if(resp.status != 200) {return}
            })
        } catch (error) {
            alert(error)
            return
        }

        const method = user_sc.id ? 'put' : 'post'
        const url = user_sc.id ? `${baseURL_sc}/${user_sc.id}` : baseURL_sc
        axios[method](url, user_sc)
            .then(resp => {
                const list = getUpdateList(resp.data)
                setItems(list)
                clear()
            })
    }

    const getUpdateList = (data) => {
        const list = userList_sc.filter((user) => user.id !== data.id)
        list.unshift(data)
        return list
    }

    const clear = () => {
        setUser(initialState)
    }

    const updateField = (event) => {
        setUser({
            ...user_sc, [event.target.name]: event.target.value
        })
    }

    function renderTable(){
        return(
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Cliente</th>
                        <th>Horário</th>
                        <th>Motivo</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        )
    }

    function renderRows(){
        return userList_sc.map(user => {
            return(
                <tr key={user.id}>
                    <td>{user.id_cliente}</td>
                    <td>{user.horario}</td>
                    <td>{user.motivo}</td>
                    <td>
                        <button className="btn btn-warning" onClick={() => load(user)}>
                            <i className="fa fa-pencil"/>
                        </button>
                        <button className="btn btn-danger ml-2" onClick={() => remove(user)}>
                            <i className="fa fa-trash"/>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    function renderForm(){
        return(
            <div className="form">
                <div className="row">
                    <div className="col=12 col-md-6">
                        <div className="form-group">
                            <label>ID_Cliente</label>
                            <input type="text" className="form-control"
                                name="id_cliente"
                                value={user_sc.id_cliente}
                                placeholder="Digite id do cliente..."
                                onChange={event => updateField(event)}
                            />
                        </div>
                    </div>

                    <div className="col=12 col-md-6">
                        <div className="form-group">
                            <label>Horário</label>
                            <input type="text" className="form-control"
                                name="horario"
                                value={user_sc.horario}
                                placeholder="Hora:Min - Dia/Mês"
                                onChange={event => updateField(event)}
                            />
                        </div>
                    </div>

                    <div className="col=12 col-md-6">
                        <div className="form-group">
                            <label>Motivo</label>
                            <input type="text" className="form-control"
                                name="motivo"
                                value={user_sc.motivo}
                                placeholder="Lavagem, Unhas, Consulta..."
                                onChange={event => updateField(event)}
                            />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={event => save(event)}>
                            Salvar
                        </button>
                        <button className="btn btn-secondary ml-2"
                            onClick={event => clear(event)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <Main {...headerProps}>
            {renderForm()}
            {renderTable()}
        </Main>
    )
}