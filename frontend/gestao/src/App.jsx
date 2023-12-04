import { useState , useEffect } from 'react'
import './App.css'
import axios from 'axios'


const api = axios.create({
  baseURL:'http://localhost:3001'
})



function App() {
  const [users, setUsers] = useState ([])
  const [nome, setNome] = useState ('')
  const [email, setEmail] = useState ('')
  const [nascimento, setNascimento] = useState ('')
  const [endereco, setEndereco] = useState ('')
  const [password, setPassword] = useState ('')
  const [confirmacao, setConfirmacao] = useState ('')

  useEffect (() => {
    api.get('/').then((res) =>{
      console.log (res)
      setUsers(res.data)
  })
    
  }, [])

function newUser (){
  api.post('/', { 
    nome, 
    email, 
    nascimento, 
    endereco, 
    password, 
    confirmacao})
  .then( (res) =>
  console.log (res))
}
  return (
      <div>
      
      <a href='Cadastro de usuários.html'>Ir para a página cadastro</a>

       <title>Gestão de usuários</title>
       <h1>Gestão de usuários</h1>

       <header>Adicionar novo usuário</header>
       <input placeholder='Nome' onChange={event => setNome (event.target.value)}/>
       <input placeholder='Email'onChange={event => setEmail (event.target.value)}/>
       <input placeholder='Nascimento'onChange={event => setNascimento (event.target.value)}/>
       <input placeholder='Endereço'onChange={event => setEndereco (event.target.value)}/>
       <input placeholder='Senha'onChange={event => setPassword (event.target.value)}/>
       <input placeholder='Confirmação da senha'onChange={event => setConfirmacao (event.target.value)}/>
       <button onClick={newUser()}>Adicionar usuário</button>


       <header>Lista de usuários</header>
       <table className="table table-hover">
       <thead>
          <tr>
          <th> Nome</th>
          <th> E-mail</th>
          <th> Nascimento</th>
          <th> Endereço</th>
          </tr>
          </thead>
          <tbody>
          {users.map( user => (
          <tr key={user.nome}>
          <td>{user.nome}</td>
          <td>{user.email}</td>
          <td>{user.nascimento}</td>
          <td>{user.endereco}</td>
          </tr>
        ))} 
          </tbody>

       </table>
            

      </div>
  )
}

export default App
