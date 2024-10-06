import Chart from "@/components/amcharts/main2"
import Chart2 from "@/components/amcharts/main3"
import PuneSafronRack from "@/components/charts/PuneSafronRack"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
]

let rackArrays = [
  {
    name: 'Rack 1',
    number: 23
  },
  {
    name: 'Rack 2',
    number: 23
  },
  {
    name: 'Rack 3',
    number: 23
  },
  {
    name: 'Rack 4',
    number: 23
  },
  {
    name: 'Rack 5',
    number: 23
  },
  {
    name: 'Rack 6',
    number: 23
  },
  {
    name: 'Rack 7',
    number: 23
  },
  {
    name: 'Rack 2',
    number: 23
  },
  {
    name: 'Rack 2',
    number: 23
  },
]

export const DetailsCard = ({name, number}) =>  (
    <div className="font-bold rounded border-[1px] border-black p-2 w-[180px] mx-2">
      <h2 className="">{name}</h2>
      <h1 className="text-2xl md:text-4xl">{number}</h1>
      <div className="h-[100px] w-[150px]">
        {/* <Chart2 /> */}
        <PuneSafronRack />
      </div>
    </div>
)

export default function OverviewPage() {
  return (
    <>
      <div className="flex flex-wrap ">
      {
        rackArrays.map(x => (
          <DetailsCard name={x.name} number={x.number} />
        ))
      }
        {/* <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={data}>
                <XAxis
                  dataKey="name"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value}`}
                />
                <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card> */}
      </div>
      <div className="h-[100px]">
        <PuneSafronRack />
      </div>

        <div className="h-[200px] w-[100%]">
          <h2>Pune Saffron Farm Condition Monitor</h2>
          <Chart />
        </div>
    </>
  )
}