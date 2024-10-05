
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
        </CardContent>
        <CardFooter>
          <Button className="w-full">Sign in</Button>
        </CardFooter>
        <div className="text-center mt-4 text-sm pt-0 pb-5 hover:cursor-pointer hover:border-b-2 hover:border-black" onClick={() => router.push('/register')}>
          {/* <a href="#" className="text-blue-600 hover:underline"> */}
            Don't have an account, please register 
          {/* </a> */}
        </div>
      </Card>
    </div>
  )
}

const LoginComp = () => {
    // const [userState, setUserSate] = useState();
    const makeRequest = () => {
        const email__ = document.getElementById("Email").value;
        const password__ = document.getElementById("Password1").value;
        axios
            .post(
                "http://tagard.in:8005/usr/login",

                {
                    email: email__,
                    password: password__,
                }
            )
            .then((response) => {
                // if (response.status === 200) {
                // If the response status is 200, set status to true
                // setUserSate(true);
                // } else {
                // setUserSate(false);
                // }
                console.log(response.status);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <>
            <Form className="w-50 ms-4 mt-5">
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        className="mb-3"
                        id="Email"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password1"
                        className="mb-3"
                        id="Password1"
                    />
                </Form.Group>
                <Button
                    variant="primary"
                    type="button"
                    onClick={() => makeRequest()}
                >
                    Submit
                </Button>
            </Form>
        </>
    );
};


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