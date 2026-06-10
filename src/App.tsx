import Navbar from "@/components/Navbar.tsx";
import Sidebar from "@/components/Sidebar";
function App() {

  return (
      <>
        <div className="flex h-screen overflow-hidden">
            {/*sidebar*/}
       <Sidebar/>

            {/*Navbar*/}
            <div className="flex-1 flex flex-col">
          <Navbar/>

            <main className="flex-1 overflow-auto p-6">
                {/* main content area */}
                <h1>Welcome to Dashboard</h1>
            </main>
            </div>
        </div>
      </>
  )
}

export default App
