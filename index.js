// let prof = 1;
// setInterval(() => {
//   if (prof === 0) {
//     prof = 1;
//   }
//   else
//   {
//     setTimeout(() => {
//       typed = new Typed('#element', {
//         strings: [
//           'whoami',
//         ],
//         typeSpeed: 40,
//         cursorChar: "",
//         loop: false,
//         blink: true
//       })
//     },100);
    
//     setTimeout(() => {
//       typed = new Typed("#name",{
//         strings:[
//           " 🙋🏻‍♂️ Hey , I am Parthib Kumar Deb."
//         ],
//         typeSpeed:30,
//         cursorChar:"",
//         loop:false
//       })
//     }, 500),
    
//     setTimeout(() => {
//       typed = new Typed("#desc",{
//         strings:[
//           " 💻 A software developer who tries to build some useful stuff for mankind."
//         ],
//         typeSpeed:30,
//         cursorChar:"",
//         loop:false
//       })
//     }, 800),
    
//     setTimeout(() => {
//       typed = new Typed("#fav",{
//         strings:[
//           " 🔑 But My favourite Part is - Backend"
//         ],
//         typeSpeed:30,
//         cursorChar:"",
//         loop:false
//       })
//     }, 1000);
    
//     setTimeout(() => {
//       typed = new Typed("#back",{
//         strings:[
//           " 💪🏻 A strong Backend gives insane scalability and efficient security to real world threats."
//         ],
//         typeSpeed:30,
//         cursorChar:"",
//         loop:false
//       })
//     }, 1500),
    
//     setTimeout(() => {
//       typed = new Typed("#front",{
//         strings:[
//           " ⛓️ But serenity also important , right? So I know norms of both worlds and how to connect them"
//         ],
//         typeSpeed:30,
//         cursorChar:"",
//         loop:false
//       })
//       prof = 0;
//     }, 2000)  
//   }
// }, 5000);

setTimeout(() => {
  typed = new Typed('#element', {
    strings: [
      'whoami',
    ],
    typeSpeed: 40,
    cursorChar: "",
    loop: false,
    blink: true
  })
},100);

setTimeout(() => {
  typed = new Typed("#name",{
    strings:[
      " 🙋🏻‍♂️ Hey , I am Parthib Kumar Deb."
    ],
    typeSpeed:30,
    cursorChar:"",
    loop:false
  })
}, 1000),

setTimeout(() => {
  typed = new Typed("#desc",{
    strings:[
      " 💻 A software developer who tries to build some useful stuff for mankind."
    ],
    typeSpeed:30,
    cursorChar:"",
    loop:false
  })
}, 3000),

setTimeout(() => {
  typed = new Typed("#fav",{
    strings:[
      " 🔑 But My favourite Part is - Backend."
    ],
    typeSpeed:30,
    cursorChar:"",
    loop:false
  })
}, 7000);

setTimeout(() => {
  typed = new Typed("#back",{
    strings:[
      " 💪🏻 A strong Backend gives insane scalability and efficient security against real world threats."
    ],
    typeSpeed:30,
    cursorChar:"",
    loop:false
  })
}, 9500),

setTimeout(() => {
  typed = new Typed("#front",{
    strings:[
      " ⛓️ But serenity also important , right? So I know norms of both worlds and how to connect them"
    ],
    typeSpeed:30,
    cursorChar:"",
    loop:false
  })
}, 15000)  




let buton = document.getElementById("btn")

buton.addEventListener("click", () => window.scrollTo({
  top: 900,
  behavior: 'smooth',
}))

let current = 1;
setInterval(() => {
    let pdf1 = document.getElementById("pdf1");
    let pdf2 = document.getElementById("pdf2");

    if (current === 1) {
      pdf1.style.transition = "width 0.9s ease-in-out";
      pdf1.style.width = "0%";
      pdf2.style.transition = "width 0.9s ease-in-out";
      pdf2.style.width = "100%";

      current = 0;
    } else {
      pdf1.style.transition = "width 0.9s ease-in-out";
      pdf1.style.width = "100%";
      pdf2.style.transition = "width 0.9s ease-in-out";
      pdf2.style.width = "0%";

      current = 1;
    }
}, 3000); // Increase the interval to allow transition to complete before switching

let Current = 1;
setInterval(() => {
    let pdf3 = document.getElementById("pdf3");
    let pdf4 = document.getElementById("pdf4");

    if (Current === 1) {
      pdf3.style.transition = "width 0.9s ease-in-out";
      pdf3.style.width = "0%";
      pdf4.style.transition = "width 0.9s ease-in-out";
      pdf4.style.width = "100%";


      Current = 0;
    } else {
      pdf3.style.transition = "width 0.9s ease-in-out";
      pdf3.style.width = "100%";
      pdf4.style.transition = "width 0.9s ease-in-out";
      pdf4.style.width = "0%";


      Current = 1;
    }
}, 3000); // Increase the interval to allow transition to complete before switching

