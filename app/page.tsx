import sql from "./db.js"
import Header from "./components/header"
import Input from "./components/input"
import Button from "./components/button"
import Incheck from "./components/incheck"
import Divtodo from "./components/divtodo"

export default function Home() {

  // const Todo = await sql`select bol, descricao from todolist`


  return (

    <section className='mb-5 mt-2 bg-blacktext-white w-[100vw]min-h-screen justify-center flex text-center items-center flex-col text-white'>
      <Header/>
      <Input/>
      <Divtodo/>
    </section>
  )
}
