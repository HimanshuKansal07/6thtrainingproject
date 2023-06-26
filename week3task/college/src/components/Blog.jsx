import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
    return(
        <div>
            <main>
                <div id="blogList">
                    <h2>My Blogs</h2>
                    <div class="blog">
                        <h3>My first day</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in ad dolorem! Fugit quaerat officiis blanditiis eius delectus tempore sed?</p>
                    </div>

                    <div class="blog">
                        <h3>Memories</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem vero maiores quibusdam consequuntur! Mollitia officiis eaque necessitatibus cum inventore a impedit. Quisquam ab voluptates eaque, fuga quod adipisci officiis?</p>
                    </div>
                </div>

                <form id="blogForm">
                <h2>Create a Blog</h2>
                <input type="text" id="titleInput" placeholder="Enter title" required/>
                <textarea id="contentInput" rows="5" placeholder="Enter content" required></textarea>
                <button type="submit"><p>Submit</p></button>
                </form>
            </main>
        </div>
    )
}

export default Blog