import { listBlog5 } from "../lib/server/appwrite";
import { Suspense } from "react";
import ModalButton from "../ui/modalButton";
import Card from "../ui/blog/card";

export const dynamic = 'force-dynamic';
export default async function Blog(){
    const blogs =  await listBlog5();

    return (
    <>
        <Suspense>
            <div className="flex flex-col items-center">
                {blogs.map((blog:any) => (
                    <Card blog={blog} key={blog.$id}/>
                ))}
            </div>
        </Suspense>
        <ModalButton parent={'blog'} />
    </>);
}