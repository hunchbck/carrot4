export default function Home() {
  return (
    <main className='flex h-screen items-center justify-center bg-gray-100 p-5 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100'>
      <div className='flex w-full max-w-screen-sm flex-col gap-2 rounded-3xl bg-white p-5 shadow-lg ring ring-transparent transition-shadow *:outline-none has-[:invalid]:ring-red-100 md:flex-row'>
        <input
          required
          className='peer h-10 w-full rounded-full bg-gray-200 pl-5 ring ring-transparent ring-offset-2 transition-shadow placeholder:drop-shadow focus:ring-green-500 focus:ring-offset-2 invalid:focus:ring-red-500'
          name='search'
          id='search'
          placeholder='Email address'
          type='text'
        />
        <span className='hidden font-medium text-red-500 peer-invalid:block'>
          Email is required.
        </span>
        <button className='rounded-full bg-black py-2 font-medium text-white transition-transform active:scale-90 peer-required:bg-green-500 peer-invalid:bg-red-100 peer-invalid:text-black md:px-10'>
          Log in
        </button>
      </div>
    </main>
  )
}
