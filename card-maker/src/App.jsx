import React, { useState } from 'react'

const App = () => {
  const [userName, setUserName] = useState('')
  const [userRole, setUserRole] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [userDesc, setUserDesc] = useState('')

  const [allUser, setAllUser] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault()

    setAllUser([...allUser, {userName,userRole,imageURL,userDesc}])

    setUserName('')
    setUserRole('')
    setImageURL('')
    setUserDesc('')
  }

    const deleteHandler = (idx) => {
    const copyUser = [...allUser]
    copyUser.splice(idx,1)
    
    setAllUser(copyUser)
  }

  return (
    <div className='h-screen bg-black text-white'>
     <form
  onSubmit={submitHandler}
  className="max-w-5xl mx-auto
  bg-white/10 backdrop-blur-lg
  border border-white/20
  rounded-2xl p-6
  shadow-xl"
>
  <h1 className="text-3xl font-bold mb-6 text-center text-white">
    Create New User
  </h1>

  <div className="flex flex-wrap gap-4">
    
    <input
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      type="text"
      placeholder="Enter your name"
      className="w-full md:w-[48%]
      px-5 py-3 text-lg font-medium
      rounded-xl
      bg-black/30 text-white
      border border-white/30
      focus:outline-none focus:ring-2 focus:ring-emerald-500
      placeholder:text-gray-400"
      required
    />

    <input
      value={imageURL}
      onChange={(e) => setImageURL(e.target.value)}
      type="text"
      placeholder="Image URL"
      className="w-full md:w-[48%]
      px-5 py-3 text-lg font-medium
      rounded-xl
      bg-black/30 text-white
      border border-white/30
      focus:outline-none focus:ring-2 focus:ring-emerald-500
      placeholder:text-gray-400"
      required
    />

    <input
      value={userRole}
      onChange={(e) => setUserRole(e.target.value)}
      type="text"
      placeholder="Enter role"
      className="w-full md:w-[48%]
      px-5 py-3 text-lg font-medium
      rounded-xl
      bg-black/30 text-white
      border border-white/30
      focus:outline-none focus:ring-2 focus:ring-emerald-500
      placeholder:text-gray-400"
      required
    />

    <input
      value={userDesc}
      onChange={(e) => setUserDesc(e.target.value)}
      type="text"
      placeholder="Enter description"
      className="w-full md:w-[48%]
      px-5 py-3 text-lg font-medium
      rounded-xl
      bg-black/30 text-white
      border border-white/30
      focus:outline-none focus:ring-2 focus:ring-emerald-500
      placeholder:text-gray-400"
      required
    />
  </div>

  <button
    className="mt-6 w-full
    py-3 text-lg font-semibold
    rounded-xl
    bg-linear-to-r from-emerald-500 to-emerald-700
    hover:from-emerald-600 hover:to-emerald-800
    active:scale-95 transition-all
    shadow-lg"
  >
    Create User
  </button>
</form>
      <div className='flex flex-wrap justify-center p-4 py-10 gap-4'>

        {allUser.map((elem, idx) => {
  return (
    <div
      key={idx}
      className="lg:w-[23vw] md:w-[30vw] sm:w-[45vw] w-full
      rounded-2xl p-6 flex flex-col items-center text-center
     from-white/90 to-white/70
      backdrop-blur-md shadow-lg
      hover:shadow-2xl hover:scale-105
      transition-all duration-300 border"
    >
      <div className="h-28 w-28 rounded-full overflow-hidden border-4 border-emerald-500 shadow-md">
        <img
          className="h-full w-full object-cover"
          src={elem.imageURL}
          alt="user"
        />
      </div>

      <h1 className="text-2xl mt-4 font-bold text-white">
        {elem.userName}
      </h1>

      <span className="mt-2 px-4 py-1 text-sm font-semibold rounded-full bg-emerald-100 text-emerald-700">
        {elem.userRole}
      </span>

      <p className="text-sm text-gray-500 mt-3 leading-relaxed">
        {elem.userDesc}
      </p>

      <button
        onClick={() => deleteHandler(idx)}
        className="mt-4 px-5 py-2 text-xs font-semibold rounded-full
        bg-red-500 text-white
        hover:bg-red-600 cursor-pointer active:scale-95
        transition-all"
      >
        Remove
      </button>
    </div>
  )
})}


      </div>
    </div>
  )
}

export default App