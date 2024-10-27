"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";
import { SignupButton } from "./signup-button";
import { LoginButton } from "./login-button";
import { LogoutButton } from "./logout-button";
import Link from "next/link";

const NavBar = () => {
  const { user, isLoading } = useUser();

  return (
    <div className="fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-10 bg-white/5 backdrop-blur-lg transition-all">
            <aside className="flex items-center gap-2 bg-orange-300 text-transparent bg-clip-text relative">
                <Link
                    href='/'
                    className='text-xl font-bold '>
                    <span> Halloween Escape Room</span>
                </Link>
            </aside>

            <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                
                <ul className="flex items-center justify-center gap-14">

                    {/* <Link
                        href="/"
                        className="btn btn-ghost rounded-lg">
                        Home
                    </Link> */}

                </ul>
            </nav>

            <div className="hidden md:block lg:block">

                {user == null ? (

                    <aside className="flex gap-2 items-center">

                        <SignupButton/>

                        <LoginButton/>

                    </aside>

                ) : (

                    <aside className="flex gap-2 items-center">

                        <Link
                            href='/dashboard'
                            className='btn btn-ghost rounded-lg'>
                            Dashboard
                        </Link>

                        <LogoutButton/>

                    </aside>

                )}
            </div>
        </div>
  );
};

export default NavBar;
