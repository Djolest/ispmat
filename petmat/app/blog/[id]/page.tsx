import { getBlog } from "@/app/lib/server/appwrite";

export default async function BlogPage({ params }: { params: { id: string } }) {
    const blog = await getBlog(params.id);
    //console.log('blog je', blog);
    function getId(url:any) {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
            return match[2];
        } else {
            return 'error';
        }
    }

    return (
    <div className="flex justify-center">
        <div className="w-[95%] max-w-[850px]">
            <h1 className="text-4xl font-bold text-gray-900 p-4">{blog.data.Title}</h1>
            <h2 className=" text-sm text-gray-500 px-4">Autor: {blog.data.Autor}</h2>
            <object data={blog.pdf.href} type="application/pdf" width="100%" height="100%" className="h-screen p-4"></object>
            {blog.data.youtubeLink ? 
            <iframe className="h-1/2 p-4" src={"https://www.youtube.com/embed/" + getId(blog.data.youtubeLink)} width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
            : null }
            {blog.dodatno ?
                <div className="flex p-4">
                    <a href={blog.dodatno.href} className="flex-grow rounded bg-blue-500 py-2 px-4 text-white text-center">Preuzmi dodatne materijale</a>
                </div>
            : null}
        </div>
    </div>);
}