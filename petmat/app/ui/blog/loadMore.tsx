'use client';
import { listBlogSve } from "../../lib/server/appwrite";
import { useState } from "react";
import Card from "./card";

export default function LoadMore() {
    const [blog, setBlog] = useState([]);
    const [showButton, setShowButton] = useState(true);

    return (
        <>
            <div className="flex flex-col items-center">
                {blog.map( (blog: any) => (
                    <Card blog={blog} key={blog.$id}/>
                ))}
            </div>
            {showButton ? 
            <div className="flex justify-center my-10">
                <button onClick={() => {
                    listBlogSve().then(data => {
                        setBlog(data)
                        setShowButton(false);
                    })
                }} className="rounded bg-blue-500 py-2 px-4 text-white m-2">
                    Učitaj više
                </button>
            </div>
            : null}
        </>
    );
}