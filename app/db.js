import postgres from 'postgres'

const connectionString = "postgresql://postgres:4aoTYUbmtEzJtO0s@db.bdcyskwoklhzxliscigs.supabase.co:5432/postgres"
const sql = postgres(connectionString)

export default sql