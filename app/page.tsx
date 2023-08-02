import sql from "./db.js"
import Header from "./components/header"
import Input from "./components/input"
import Button from "./components/button"
import Incheck from "./components/incheck"
// import Divtodo from "./components/todo"

export default async function Home() {

  const Todo = await sql`select bol, descricao from todolist`


  return (

    <section className='mb-5 mt-2 bg-blacktext-white w-[100vw]min-h-screen justify-center flex text-center items-center flex-col text-white'>
      <Header />
      <Input />
      <div className="bg-white hover:bg-green-400 transition duration-300 ease-in-out  flex justify-center outline-3 p-[2em] text-[1.5em] text-left w-120 rounded-xl  ">
        <ul>
          {Todo.map((p) => (
            <li key={p.id} className='text-black'>
              {p.bol} <Incheck /> -{p.descricao}
            </li>
          ))}
          <Button />
        </ul>
      </div>
    </section>
  )
}
