import React from "react";
import Link from "next/link";

const index = () => (
    <div>
        {/* This is the comment expression in JSX */}
        {/* creates a navigation link in home page that navigates to about page */}
        <Link href="/about">
            <a> About </a>
        </Link>
        <p>Hello Next.js</p>
    </div>
);

export default index;