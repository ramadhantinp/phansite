import React, {useState} from "react";
import moment from "moment";

export default function CommentForm({addPost}) {
    //yang bakal dipake buat value default di form
    const [commentPost, setCommentPost] = useState ({
        username:"",
        comment:"",
        id: "",
    })

    //track changes. map ... buat simpen prev state.
    //event target name based on attr name di form
    const onChangeHandler = (event) => {
        setCommentPost({
            ...commentPost,
            [event.target.name]: event.target.value,
            id:+new Date(),
            date: new moment().format('MMMM Do YYYY, h:mm:ss a').toString()
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        //masukin input form ke list of commentsnya
        addPost(commentPost);
        //clear inputan abis submit
        setCommentPost({
            username:"",
            comment:""
        });
        alert("Your comment has been successfully posted!");
    }

    return (
        <section id="comments" className="text-center">
            <div className="bg-red-600 text-white
            bg-[url('../public/assets/slicing-components/divider-black-2.png')]
            bg-no-repeat bg-cover bg-local w-full h-[100px]">
                <h2 className="md:text-7xl text-6xl">COMMENTS</h2>
                <p>You may also request for the Phantom Thieves' help.</p>
            </div>
            <form onSubmit={submitHandler}
            className=" bg-black text-slate-50 m-0">
                <div className="mx-auto mb-2 w-2/3 text-justify">
                    <label htmlFor="username" className="block">Name</label>
                    <input type="text" name="username" onChange={onChangeHandler}
                    value={commentPost.username} required
                    className="text-black p-1"/>
                </div>
                <div className="mx-auto mb-4 w-2/3 text-justify">
                    <label htmlFor="comment" className="block">Comment</label>
                    <textarea name="comment" placeholder="Enter your comment"
                    onChange={onChangeHandler} value={commentPost.comment} required
                    className="h-40 w-full text-black p-2"/>
                </div>
                <button type="submit" className="bg-slate-50 text-black border-0 btn-c mb-10">Post</button>
            </form>
            <div className="bg-red-600
            bg-[url('../public/assets/slicing-components/divider-black-3.png')]
            bg-no-repeat bg-contain bg-local w-full h-[60px]"></div>
        </section>
    );
}