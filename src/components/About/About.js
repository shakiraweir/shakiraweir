import React, { Component } from 'react';
import './About.css'

class About extends Component {
    render() {
        return (
            <div className="home">
                  
                    <section className="colorblock-one"></section>
                        <div className="welcome about">
                            <h1 className="greeting">About</h1>
                            <div className="about-list">
                                
                                <p className='description'> &lsaquo;&#47;&rsaquo;
I am a junior programmer with a solid foundation in the latest front-end and back-end technologies.  </p>

                                <p className='description'>
                                &lsaquo;&#47;&rsaquo; I love the structure, order and efficiency of programming. </p>

                                <p className='description'> &lsaquo;&#47;&rsaquo; I love the creativity of the design process. </p>

                                <p className='description'> &lsaquo;&#47;&rsaquo; I enjoy spending time fixing little details in UI design.</p>

                                <p className='description'>&lsaquo;&#47;&rsaquo;  I am a soon-to-be graduate of General Assembly’s Software Engineering Immersive program in Washington, D.C. </p>

                                <p className='description'>&lsaquo;&#47;&rsaquo; I love to collaborate and I’m currently looking for other creative minds to work, grow and network with. </p>

                                <p className='description'>&lsaquo;&#47;&rsaquo; Feel free to <span><a href="/profile#projects">browse my work,</a></span>
                                <span><a href="profile#skills">view my skills,</a></span>
                                or 
                                <span><a href="profile#contact">get in touch.</a></span></p>

                            </div>
                        </div>
                    <section className="colorblock-two"></section>
            </div>
        );
    }
}

export default About;