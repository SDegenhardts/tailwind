import { todo } from "node:test"
import sql from "./db.js"

export default async function Home() {

  const Todo = await sql`select bol, descricao from todolist`


  return (

    <section className='bg-blacktext-white w-[100vw]min-h-screen justify-center flex text-center items-center flex-col text-white'>
      <h1 className='hover:text-green-400 text-[3em] hover:text-[5em] transition duration-300 ease-in-out '>
        Todolist
      </h1>
      <input placeholder="Tarefa" className="mb-6 transition duration-300 ease-in-out  hover:bg-green-400 outline-none flex justify-center p-11 rounded-xl text-black text-[1.4em] "></input>
      <div className="bg-white hover:bg-green-400 transition duration-300 ease-in-out  flex justify-center outline-3 p-[2em] text-[1.5em] text-left w-120 rounded-xl  ">
        <ul>
          
          {Todo.map((p) => (
            <li key={p.id} className='text-black'>
              {p.bol} <input type="checkbox" className="w-[0.8em] h-[0.8em] accent-black hover:accent-white transition duration-300 ease-in-out "></input> -{p.descricao}
            </li>
          ))}
          <div className="text-center flex align-middle items-center justify-center">
          <button className="text-black p-3 rounded-lg mt-8 mt-0 border-none font-bold tracking-widest uppercase decoration-green-400 transition duration-500 ease-in-out text-xl relative overflow-hidden outline
           hover:decoration-white hover:outline-white shadow-black hover:text-white hover:decoration-black hover:bg-black
          "
          >Delete All</button>
          </div>
        </ul>
      </div>
    </section>
  )
}
