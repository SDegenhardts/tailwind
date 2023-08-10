import TodoList from "./components/todoList"

export default async function Home() {
  // const Todo = await sql`select bol, descricao from todolist`
  return (
    <TodoList/>
  )
}
