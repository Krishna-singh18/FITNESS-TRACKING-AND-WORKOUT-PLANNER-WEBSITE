var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px"; // Add "px" to set the left position in pixels
    crsr.style.top = dets.y + "px"; // Add "px" to set the top position in pixels
    blur.style.left = dets.x -150+ "px"; // Add "px" to set the top position in pixels
    blur.style.top = dets.y -150+ "px"; // Add "px" to set the top position in pixels
});



// Rest of your code remains unchanged






gsap.to("#nav", {
    backgroundColor:"#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "Body", // Note: 'Body' should be 'body' unless you have a variable named 'Body'.
        // markers: true,
        start:"top -10%",
        scrub:2
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -30%",
        end:"top -100%",
        scrub:3
    }
})
