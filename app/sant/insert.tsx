'use server'

import sql from "../db"

export type tarefas = {
    id: number
    bol: false
    descricao: string
}

export async function AddTask(insert:tarefas) {
    await sql`insert into todolist (descricao) values (${insert.descricao})`
}