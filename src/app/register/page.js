

'use client'

import React from "react";
import axios from "axios";
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { countriesList } from "@/components/ui/countryList";

const CountryOptions = ({ id, name }) => {
    return (
        <option value={id} id="countryID2">
            {name}
        </option>
    );
};


function LoginScreen() {

    
    const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-8">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/grafana_icon.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
          </div>
          <CardTitle className="text-2xl font-bold text-center border-b-[1px] border-black pb-3 ">Welcome to Grafana</CardTitle>
          {/* <CardDescription className="text-center">
            Enter your email to sign in to your account
          </CardDescription> */}
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <div>
                <select
                    className="mb-3"
                    // onChange={(e) => handleCountrySelection(e)}
                    id="CountryId"
                >
                    <option>Select Country</option>
                    {countriesList.map((country) => {
                        return (
                            <CountryOptions
                                {...country}
                                key={country.id}
                            />
                        );
                    })}
                </select>
            </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Sign in</Button>
        </CardFooter>
        <div className="text-center mt-4 text-sm pt-0 pb-5 hover:cursor-pointer hover:border-b-2 hover:border-black" onClick={() => router.push('/login')}>
          {/* <a href="#" className="text-blue-600 hover:underline"> */}
            Have an account, please login 
          {/* </a> */}``
        </div>
      </Card>
    </div>
  )
}

export default function Page() {
    return (
        <div>
            <form>
                <div>
                    <LoginScreen />
                </div>
            </form>
        </div>
    );
}