import { useState } from "react"

export default function Form() {

  const [form, setForm] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(form)
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
    setForm({
      ...form, 
      [e.target.name]: e.target.value
    })

  }

  //const [name, setName] = useState('')
  //const [lastName, setLastName] = useState('')
  //const [email, setEmail] = useState('')
  //const [password, setPassword] = useState('')

  return <form onSubmit={handleSubmit}>
    <input 
    placeholder="Nome"
    type="text" 
    name="name"
    value={ form.name }
    onChange={handleInputChange}
    />
    <input 
    placeholder="Sobrenome"
    type="text" 
    name="lastName"
    value={ form.lastName }
    onChange={handleInputChange}
    />
    <input 
    placeholder="Email"
    type="email" 
    name="email"
    value={ form.email }
    onChange={handleInputChange}
    />
    <input 
    placeholder="Senha"
    type="password" 
    name="password"
    value={ form.password }
    onChange={handleInputChange}
    />
    <input 
    placeholder="Senha"
    type="password" 
    name="passwordConfirm"
    value={ form.passwordConfirm }
    onChange={handleInputChange}
    />
    <button type="submit">
      enviar formulario
    </button>

  </form>
}