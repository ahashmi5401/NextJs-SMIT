import { use } from "react"

interface UserData {
    id: 1,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor: string,
    hair: {
      color: string,
      type: string,
    }
    ip: string,
    address: {
      address: string,
      city: string,
      state: string,
      stateCode: string,
      postalCode: string,
      coordinates: {
        lat: number,
        lng: number,
      }
      country: string,
    }
    macAddress: string,
    university: string,
    bank: {
      cardExpire: string,
      cardNumber: string,
      cardType: string,
      currency: string,
      iban: string,
    }
    company: {
      department: string,
      name: string,
      title: string,
      address: {
        address: string,
        city: string,
        state: string,
        stateCode: string,
        postalCode: string,
        coordinates: {  
          lat: number,
          lng: number,
        }
        country: string,
      }
    }
    ein: string,
    ssn: string,
    userAgent: string,
    crypto: {
      coin: string,
      wallet: string,
      network: string,
    }
    role: string,
  }
interface pageProps {
    params: Promise<{
        id: string
    }>
}
const page = async({ params }: pageProps) => {
    const { id } = use(params)
    const fetchProfile = async () => {
        const profile = await fetch(`https://dummyjson.com/users/${id}`)
        const data = await profile.json()
        return data
    }
    const profile = await fetchProfile()
  return (
    <div className='flex justify-center items-center w-full h-screen'>
      {profile ? (
  <div className="border border-slate-800 bg-slate-900 rounded-xl p-6 max-w-sm shadow-md">
    
    {/* Clean, fully type-safe autocompleted fields */}
    <h1 className="text-xl font-bold mt-1 text-slate-100">
      {profile.firstName} {profile.lastName}
    </h1>
    
    <p className="text-sm text-slate-400 mt-1">
      {profile.email}
    </p>
    
    {/* Optional: You can now access nested fields safely too! */}
    <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-mono text-slate-500">
      <p>Company: {profile.company?.name}</p>
      <p>Role: {profile.role}</p>
    </div>
  </div>
) : (
  <p className="text-slate-500 italic animate-pulse">
    Loading profile dataset...
  </p>
)}
    </div>
  )
}

export default page