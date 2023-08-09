'use server'

import sql from "../db"

export type tarefas = {
    id: number
    bol: boolean
    descricao: string
}

export async function UpdateTask() {
    await sql`update todolist bol=true where bol=false`
}