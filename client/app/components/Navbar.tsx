"use client";

import { signOut } from "next-auth/react";


function Navbar() {
    const handleSignOut = () => {
        signOut({
            redirect: true,
            callbackUrl: "/auth/signin",
        });
    };
    return (
        <div
        onClick={handleSignOut}
        >logout</div>
    );
}

export default Navbar