import Navbar from "@/components/Navbar.tsx";
import Sidebar from "@/components/Sidebar";
import {ChartContainer} from "@/components/ui/chart.tsx";
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
} from "recharts";

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
                Welcome to the Rajvir's Dashboard
                {/* main content area */}
                <ChartContainer
                    config={{
                        sales: {
                            label: "Sales",
                            color: "#2563eb",
                        },
                    }}
                >
                    <LineChart
                        data={[
                            { month: "Jan", sales: 100 },
                            { month: "Feb", sales: 200 },
                        ]}
                    >
                        <CartesianGrid />
                        <XAxis dataKey="month" />
                        <Line
                            dataKey="sales"
                            stroke="var(--color-sales)"
                        />
                    </LineChart>
                </ChartContainer>
            </main>

            </div>
        </div>
      </>
  )
}

export default App
