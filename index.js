let scElements = document.querySelectorAll("#sc");
let btnElements = document.querySelectorAll("#scroll");
let elements =  document.getElementById("element");

// Loop through each pair of sc (content) and btn (button) elements
for (let i = 0; i < scElements.length; i++) {
  const sc = scElements[i];
  const btn = btnElements[i];

  btn.addEventListener("click", function () {
    if (sc.style.height === "0rem") {
      sc.style.height = "20rem";
      btn.style.rotate = "180deg";
      sc.style.transition = "height 1s ease-in-out"; // Set transition duration and animation
    } else {
      sc.style.height = "0rem";
      btn.style.rotate = "0deg";
      sc.style.transition = "height 1s ease-in-out"; // Set transition duration and animation
    }
  });
}


var typed = new Typed('#element', {
    strings: [
        'Hey There !! I am Parthib Kumar Deb.', 
        'I am a Full Stack Web Developer.',
        'But My favourtite Part in this game is Backend.',
        'So I choose My One and only Player - <b>Django</b>',
        "Haven't I dived in Frontend?",
        "Well I have",
        'For Client-side I use HTML, TailwindCSS, JS ,and React',
        'Wait!! How I can I forget about Databases??',
        'Well , I mostly use Postgresql , along with Redis and Mongodb',
        'Now for more about my efficiency , checkout my projects'
    ],
    typeSpeed: 50,
    backSpeed: 10,
    cursorChar: '',
    loop: true
  });


  let current = 1;
  setInterval(() => {
      let pdf1 = document.getElementById("pdf1");
      let pdf2 = document.getElementById("pdf2");
  
      if (current === 1) {
          pdf1.style.transition = "width 0.9s ease-in-out";
          pdf1.style.width = "0%";
          pdf2.style.transition = "width 0.9s ease-in-out";
          pdf2.style.width = "100%";
  
          // setTimeout(() => {
          //     pdf1.classList.add("hidden");
          //     pdf2.classList.remove("hidden");
          // }, 2000); // Apply the hidden class change after the transition completes
  
          current = 0;
      } else {
          pdf1.style.transition = "width 0.9s ease-in-out";
          pdf1.style.width = "100%";
          pdf2.style.transition = "width 0.9s ease-in-out";
          pdf2.style.width = "0%";
  
          // setTimeout(() => {
          //     pdf2.classList.add("hidden");
          //     pdf1.classList.remove("hidden");
          // }, 2000); // Apply the hidden class change after the transition completes
  
          current = 1;
      }
  }, 5000); // Increase the interval to allow transition to complete before switching
  
  