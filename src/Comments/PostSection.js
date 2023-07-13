import { useState } from "react";
import Post from "./Post";

export default function PostSection ({post}) {
    const [load, setLoad] = useState(5);

    const addLoadHandler = () => {
        setLoad((prevVal) => prevVal + 5);
    }

    return (
        <section className="p-8 bg-red-600">
            <div className="flex flex-col items-center">
                {post.slice(0,load).map((post) => (
                    <Post
                        key={post.id}
                        id={post.id}
                        username={post.username}
                        comment={post.comment}
                        date={post.date}
                        {...post}
                    />
                ))}
            </div>
            <div className="flex flex-wrap mx-auto lg:w-1/3 w-1/2">
                <button className="btn-b my-1 border-0 bg-black text-slate-50 mx-auto block" onClick={addLoadHandler}>Load more</button>
                <button className="btn-a my-1 border-0 bg-black text-slate-50 mx-auto block"><a href="#comments">Go back</a></button>
            </div>
        </section>
    )
}

