export default function HelloWorld() {
  const name = 'Daniel'

  return <div>
    <h1>Hello, { name === 'Daniel' ? 'Daniel': name}!!!</h1>
    <h1>Hello, { name }!!!</h1>
  </div>
}
