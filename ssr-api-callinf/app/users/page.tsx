import Link from 'next/link'

const page = async () => {
  const Api = async () => {
    const res = await fetch('https://dummyjson.com/users')
    const data = await res.json()
    const users = data.users || []
    return users
  }
  let users = await Api()
  return (
    <div>
  <div className="p-6">
    <h1 className="text-xl font-bold mb-4">Monitored Profiles / Users</h1>
    
    {/* 1. Parent Grid Wrapper (Put this OUTSIDE the map loop) */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      
      {users.map((user: any) => (
        /* 2. Simplified Clean Card Inner Body */
        <Link href={`/users/${user.id}`} key={user.id} className="cursor-pointer border border-slate-800 bg-slate-900 rounded-xl p-6 flex flex-col justify-between shadow-sm transition-all hover:scale-[1.01]">
        
        <div 
          className="cursor-pointer border border-slate-800 bg-slate-900 rounded-xl p-6 flex flex-col justify-between shadow-sm transition-all hover:scale-[1.01]"
        >
          <div>
            <h2 className="text-lg font-semibold text-slate-100">{user.firstName}</h2>
            <p className="text-sm text-slate-400 break-all">{user.email}</p>
          </div>
          
          <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500">
            <span>ID: {user.id}</span>
            <span className="text-emerald-500 font-medium">Active Connected</span>
          </div>
        </div>
        </Link>
      ))}

    </div>
  </div>
)
    </div>
  )
}

export default page