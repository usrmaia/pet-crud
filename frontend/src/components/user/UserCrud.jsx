import Main from "./../tamplate/Main"
import axios from "axios"
import { useEffect, useState } from "react"

const baseURL = "http://localhost:3001/users"

const headerProps = {
    icon: "users",
    title: "Usuários",
    subtitle: "Cadastro de Usuários: CRUD"
}

const initialState = {dono: "", pet: "", especie_raca: "", descricao: ""}

export default function UserCRUD(){
    const [user, setUser] = useState(initialState)
    const [userList, setItems] = useState([])

    useEffect(() => {
        const getAllUsers = async () => {
            const allUsers = await retrieveUSers()
            if(allUsers) setItems(allUsers)
        }
        getAllUsers()
    }, [])

    const retrieveUSers = async () => {
        try{
            const response = await axios.get(baseURL)
            return response.data
        }catch(error){
            alert(error)
        }
    }

    const load = (user) => {
        setUser(user)
    }

    const remove = (userSelected) => {
        axios.delete(`${baseURL}/${userSelected.id}`)
            .then(resp => {
                const newList = userList.filter(user => user !== userSelected)
                setItems(newList)
            })
    }

    const save = () => {
        if(user.dono === "" || user.pet === "" || user.especie_raca === ""){
            alert("Preencha os campos obrigatórios!")
            return
        }

        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseURL}/${user.id}` : baseURL
        axios[method](url, user)
            .then(resp => {
                const list = getUpdateList(resp.data)
                setItems(list)
                clear()
            })
    }

    const getUpdateList = (data) => {
        const list = userList.filter((user) => user.id !== data.id)
        list.unshift(data)
        return list
    }

    const clear = () => {
        setUser(initialState)
    }

    const updateField = (event) => {
        setUser({
            ...user, [event.target.name]: event.target.value
        })
    }

    function renderTable(){
        return(
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Dono</th>
                        <th>Pet</th>
                        <th>Espéciel/Raça</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        )
    }

    function renderRows(){
        return userList.map(user => {
            return(
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.dono}</td>
                    <td>{user.pet}</td>
                    <td>{user.especie_raca}</td>
                    <td>{user.descricao}</td>
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
                            <label>Dono</label>
                            <input type="text" className="form-control"
                                name="dono"
                                value={user.dono}
                                placeholder="Digite nome e sobrenome do dono..."
                                onChange={event => updateField(event)}
                            />
                        </div>
                    </div>

                    <div className="col=12 col-md-6">
                        <div className="form-group">
                            <label>Pet</label>
                            <input type="text" className="form-control"
                                name="pet"
                                value={user.pet}
                                placeholder="Digite nome do pet..."
                                onChange={event => updateField(event)}
                            />
                        </div>
                    </div>

                    <div className="col=12 col-md-6">
                        <div className="form-group">
                            <label>Espécie/Raça</label>
                            <input type="text" className="form-control"
                                name="especie_raca"
                                value={user.especie_raca}
                                placeholder="Digite nome da espécie ou raça do animal..."
                                onChange={event => updateField(event)}
                            />
                        </div>
                    </div>

                    <div className="col=12 col-md-6">
                        <div className="form-group">
                            <label>Descrição</label>
                            <input type="text" className="form-control"
                                name="descricao"
                                value={user.descricao}
                                placeholder="Informe necessidates especiais ou informações importantes sobre o animal..."
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