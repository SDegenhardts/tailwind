import { todo } from "node:test"
import sql from "./db.js"

export default async function Home() {

  const Todo = await sql`select bol, descricao from todolist`


  return (

    <section className='bg-blacktext-white w-[100vw]min-h-screen justify-center flex text-center items-center flex-col text-white'>
      <h1 className='hover:text-green-400 text-[15em] hover:text-[13em]'>
        Hello
      </h1>
      <div className="bg-white flex justify-center outline-3 p-[2em] text-center w-80 rounded-xl ">
        <ul>
          {Todo.map((p) => (
            <li key={p.id} className='text-black'>
              {p.bol} - {p.descricao}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
