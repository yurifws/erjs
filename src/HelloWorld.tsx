export default function HelloWorld() {
  const name = 'Daniel'
  const title = <h1>Hello, { name }!!!</h1>
  const index = 0

  if(name === 'Daniel'){
    return <h1 tabIndex={index} style={{background: 'red'}}>{name}</h1>
  }

  return <div>
    {title}
  </div>
}
