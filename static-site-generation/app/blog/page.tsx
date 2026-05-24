import Link from 'next/link'
import React from 'react'


const page = async () => {

  try {
    let res = await fetch('https://dummyjson.com/todos')
    let { todos } = await res.json()
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Todos</h1>
          <div className="space-y-2">
            {todos.map((todo: any, idx: any) => (
              <Link href={`/${todo.id}`} key={idx} className="border p-2 rounded" >
                <h2 className="font-semibold">{todo.todo }</h2>
              </Link>
            ))}
          </div>
      </div>
    )
  } catch (error) {
    console.error('Error fetching todos:', error)
    return <div>Error loading todos</div>
  }
}

export default page