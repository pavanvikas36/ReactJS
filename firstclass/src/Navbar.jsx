import React, { useRef } from "react";
import "./Navbar.css"
function Navbar(){
    // const videoRef = useRef(null);

    // const handleMouseEnter = () => {
    //     videoRef.current.play();
    // };

    // const handleMouseLeave = () => {
    //     videoRef.current.pause();
    //     videoRef.current.currentTime = 0; // optional: reset video
    // };
    return (
            <div id="navbar-main">
                <h2>Pavan Vikas Nayak</h2>
                <div id="navbar1">
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
                <div id="navbar2">
                    <p>Login</p>
                    <p>Signup</p>
                </div>
            </div>
            // <div>
            //     <div id="container1">
            //         <img src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image 1" />
            //         <img src="https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image 2" />
            //         <img src="https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image 3" />
            //         <img src="https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image 4" />
            //     </div>
            //     <div id="container1">
            //         <video ref={videoRef} width = "100%" autoplay muted playsinline controls onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ cursor: "pointer" }}>
            //             <source src="https://videos.pexels.com/video-files/5937356/5937356-hd_2048_1024_30fps.mp4" type="video/mp4"/>
            //         </video>
            //         <video width = "100%" autoplay muted playsinline controls>
            //             <source src="https://videos.pexels.com/video-files/5527698/5527698-uhd_2560_1440_30fps.mp4" type="video/mp4"/>
            //         </video>
            //         <video width = "100%" autoplay muted playsinline controls>
            //             <source src="https://videos.pexels.com/video-files/8334109/8334109-uhd_2732_1440_25fps.mp4" type="video/mp4"/>
            //         </video>
            //         <video width = "100%" autoplay muted playsinline controls>
            //             <source src="https://videos.pexels.com/video-files/3335969/3335969-sd_640_360_30fps.mp4" type="video/mp4"/>
            //         </video>
            //     </div>
            // </div>
    )
}
export default Navbar

// import React, { useRef } from "react";

// function HoverVideo() {
//   const videoRef = useRef(null);

//   const handleMouseEnter = () => {
//     videoRef.current.play();
//   };

//   const handleMouseLeave = () => {
//     videoRef.current.pause();
//     videoRef.current.currentTime = 0; // optional: reset video
//   };

//   return (
//     <video
//       ref={videoRef}
//       width="100%"
//       muted
//       playsInline
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       style={{ borderRadius: "12px", cursor: "pointer" }}
//     >
//       <source src="https://videos.pexels.com/video-files/5527698/5527698-uhd_2560_1440_30fps.mp4" type="video/mp4" />
//       Your browser does not support the video tag.
//     </video>
//   );
// }

// export default HoverVideo
