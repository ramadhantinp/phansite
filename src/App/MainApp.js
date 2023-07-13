import React, { useState } from "react";
import CommentForm from "../Comments/CommentForm";
import PostSection from "../Comments/PostSection";
import PollSection from "../Poll/PollSection";
import MemberSection from "../Members/MemberSection";
import data from "../Comments/data/CommentFixed.json"
import Footer from "../HeadFooter/footer";
import Header from "../HeadFooter/Header";
import "../index.css"

export default function MainApp () {
    //tempat simpen comments yang udah masuk
    const [post, updatePost] = useState(data);
    const [votes, updateVotes] = useState([3980090]);

    //pass func state di commentform pake fungsi baru
    const addPost = (commentPost) => {
        //isi post arr pake data2 yang ada di post + yang dipass dari commentform
        //new insight...! kalo dibalik ternyata alih2 jadi push, dia jadi unshift() wow!
        updatePost([commentPost, ...post]);
    }

    const addVotes = () => {
        updateVotes(parseInt(votes)+parseInt(1));
    }

    const subtractVotes = () => {
        updateVotes(parseInt(votes)-parseInt(1));
    }

    return (
        <div className="bg-red-600 font-viga text-lg selection:bg-yellow-300">
            <Header/>
            <PollSection percentage={votes} addVotes={addVotes} subtractVotes={subtractVotes}/>
            <MemberSection/>
            <CommentForm addPost={addPost}/>
            <PostSection post={post}/>
            <Footer/>
        </div>
    )
}