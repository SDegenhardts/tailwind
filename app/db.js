import postgres from 'postgres'

const connectionString = "postgresql://postgres:1223344556677889@db.bcvgviarctvvuzjbkpgi.supabase.co:5432/postgres"
const sql = postgres(connectionString)

export default sql