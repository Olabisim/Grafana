
'use client'

import React, {useState} from "react";
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
import { toast } from "react-toastify";

function LoginScreen() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    console.log('this is the email that is coming in')
    console.log(email)

    console.log('this is the password that is coming in')
    console.log(password)

    const router = useRouter()

    
    // const makeRequest2 = async (e) => {
    //     e.preventDefault();
    //     console.log('something making request')
    //     toast.error("Password must be over 6 character", {
    //         position: "top-right",
    //       });
    // }

    const makeRequest = async (e) => {
    
        e.preventDefault();

        if(email.length < 6 || password.length < 3 ) {
            toast.error("Password or email must be greater than 6 characters", {
                position: "top-right",
            });
            return;
        }

        console.log('entered the make request route')

        // if(email.length > 5) {
        //     toast.error("email is less than 5", {
        //         position: "top-right",
        //     });
        //     return;
        // }
        setLoading(true)
        
      try {

        const res = await fetch("http://tag4track.com:8087/api/login", {
          method: "POST",
           mode: 'no-cors',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: email, password }),
        });

        setLoading(false)


        console.log('res')
        console.log(res)

        if (res.status === 400) {
          toast.error("Password must be over 6 character", {
            position: "top-right",
          });
        }
        if (res.status === 500) {
          toast.error("Email already exist,try another email", {
            position: "top-right",
          });
        }
        if (res.status === 200 || 201 ) {
          // setactiontype('login')
          toast.success("Logged In successfully", {
            position: "top-right",
          });
          router.push('/');
          
            if (typeof localStorage !== "undefined") {
                localStorage.setItem('grafana_token', 'kDgqNBO3AfX04O9x_lfper6BY_ZQsbM35ZLE_VTBLykr3W3y_cxrMIA05zH_Vo1ycNn-QsKN0sFVn3a4qwg7Rw==')
            }
        }
        // setEmail('')
        // setPassword('')

      } catch (err) {
        
        setLoading(false)
        // setErr(true);
        console.log(err);
      }

        // axios
        //   .post(
        //       "http://tagard.in:8005/usr/login",

        //       {
        //           email,
        //           password,
        //       }
        //   )
        //   .then((response) => {
            
        //         console.log(response);
        //         console.log(response.status);
        //         if (response.status === 200) {
        //             toast.success("token has been sent to your mail", {
        //                 position: "top-right",
        //             });
        //         } else {
        //             toast.error("failed to send token", {
        //                 position: "top-right",
        //             });
        //             // setErr("User with this email not registered")
        //         }
                
        //         setLoading(false)

        //   })
        //   .catch((error) => {
        //     toast.error("request failed", {
        //         position: "top-right",
        //     });
        //       console.error(error);
              
        //     setLoading(false)
        //   });
  };


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
            <Input id="email" type="email" placeholder="m@example.com" required onChange={(e) => setEmail(e.target.value) } />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required onChange={(e) => setPassword(e.target.value) } />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={(e) => makeRequest(e)}> {loading ? 'loading...' : 'Sign In'}</Button>
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