export default function App() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-[#FB3E64] flex justify-center items-center">
      <form className="flex flex-col bg-white p-4 rounded-xl text-3xl w-1/3">
        <label htmlFor="name" className="mb-4">Enter Your Name</label>
        <input className="text-2xl border-none focus:brder-none focus:outline-none w-4/5" autoComplete={false} type='text' name='name' placeholder='Type your name'/>
      </form>
    </div>
  )
}