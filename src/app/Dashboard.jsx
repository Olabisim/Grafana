"use client"

import { useState } from "react"
import { Bell, Home, PieChart, Settings, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import OverviewPage from "./overview"
import UsersPage from "./users"
import AnalyticsPage from "./analytics"
import SettingsPage from "./settings"
import Image from "next/image";
import { MdOutlineWifi } from "react-icons/md";
import { HiQuestionMarkCircle } from "react-icons/hi2";
import { LuRefreshCw } from "react-icons/lu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}


export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const router = useRouter()

  const pages = {
    overview: <OverviewPage />,
    users: <UsersPage />,
    analytics: <AnalyticsPage />,
    settings: <SettingsPage />,
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-4">
        <nav className="space-y-2">

            <div>
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/grafana_icon.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
            </div>

          <Button
            variant={activeTab === "overview" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("overview")}
          >
            <Home className="mr-2 h-4 w-4" />
            Home
          </Button>
          <Button
            variant={activeTab === "users" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("users")}
          >
            <Users className="mr-2 h-4 w-4" />
            Dashboards
          </Button>
          <Button
            variant={activeTab === "analytics" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("analytics")}
          >
            <PieChart className="mr-2 h-4 w-4" />
            Alerting
          </Button>
          <Button
            variant={activeTab === "settings" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("settings")}
          >
            <Settings className="mr-2 h-4 w-4" />
            Administration
          </Button>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navigation */}
        <header className="bg-white border-b p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">MQTT</h1>
            <div className="flex items-center space-x-4">
              <Input type="search" placeholder="Search..." className="w-64" />
              <Button size="icon" variant="ghost">
                <HiQuestionMarkCircle className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
              <Button size="icon" variant="ghost">
                <MdOutlineWifi className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
              <Button size="sm" onClick={() => router.push('/login')}>
                <Link href="#">Log in</Link>
              </Button>
            </div>
          </div>
          
          <div className="border-t-2 pt-2 mt-2 flex items-center justify-between">
            <h1 className="text-2xl font-semibold"></h1>
            <div className="flex items-center space-x-4">
              <Button size="sm">
                <Link href="#">Share</Link>
              </Button>
 
              <Button size="icon" variant="ghost">
                <LuRefreshCw className="h-5 w-5" />
                {/* <HiQuestionMarkCircle className="h-5 w-5" /> */}
                <span className="sr-only">Notifications</span>
              </Button>
                                     
              <Select>
                <SelectTrigger className="w-[70px] border-black">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select refresh time</SelectLabel>
                    <SelectItem value="apple">Off</SelectItem>
                    <SelectItem value="apple">Auto</SelectItem>
                    <SelectItem value="apple">5s</SelectItem>
                    <SelectItem value="banana">10s</SelectItem>
                    <SelectItem value="blueberry">15s</SelectItem>
                    <SelectItem value="grapes">20s</SelectItem>
                    <SelectItem value="pineapple">25s</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          {pages[activeTab]}
        </main>
      </div>
    </div>
  )
}