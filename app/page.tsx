import postgres from "./db.js"

export default async function Home() {

  const Todo = await sql ``

  return (

    <section className='
    bg-black
    text-white 
    w-[100vw]
    min-h-screen 
    justify-center 
    flex text-center 
    flex-col'>
      <h1 className='
      hover:text-green-400 
      text-[25em] 
      hover:text-[13em]'>
        Hello
      </h1>
    </section>
  )
}
