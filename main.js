let x = document.querySelector(".fa-brands.fa-x-twitter")
let discord = document.querySelector(".fa-brands.fa-discord")
let github = document.querySelector(".fa-brands.fa-github")
let inkend = document.querySelector(".fa-brands.fa-linkedin")
let center = document.querySelectorAll("p")
let pa1 = document.querySelector(".pa1")
let addimg = document.getElementById("add")
let plus = document.getElementById("plus")
let output = document.getElementsByClassName("output")
let img = document.getElementById("imginput")
let imgbox = document.querySelector(".img-box")
let delatepro = document.getElementById("del1")
let boxl = document.querySelectorAll(".box")
let saveimg = document.querySelectorAll(".buttonsave");

center.forEach(function(p2){
  pa1.addEventListener("click",()=>{
  imgbox.classList.add("block")
  imgbox.classList.remove("none")
  saveimg.forEach(function(el){
    el.classList.add("block")
    el.classList.remove("none")
  })
  });
  p2.addEventListener("click",()=>{
    imgbox.classList.add("none")
    imgbox.classList.remove("block")
    saveimg.forEach(function(el){
      el.classList.add("none")
      el.classList.remove("block")
    })
  });
})



x.onclick=()=>{
location.href="https://x.com"
}

discord.onclick=()=>{
    location.href="https://discord.com"
    }

    github.onclick=()=>{
        location.href="https://github.com"
        }


        inkend.onclick=()=>{
            location.href="https://linkedin.com"
            }


            center.forEach((p)=>{
             p.addEventListener("click",()=>{
            center.forEach((p2)=>{
              p2.classList.remove("click")
              p.classList.add("click")
              
            
            })
            })
    
        

            })




document.querySelector("#home").addEventListener("load",()=>{
    document.querySelector("#home")
})

window.addEventListener("load",()=>{
    pa1.classList.add("click")

})

let count = 1

let buttonaray = []
let imglocal = []

let i = document.querySelectorAll(".fa-trash-can")

addimg.addEventListener("change",()=>{
      let divbox = document.createElement("div")
    divbox.className=`box${count}`
    divbox.classList.add("box")

const newimg = document.createElement("img")
let caption = document.createElement("div")
caption.className="caption"

let h4 = document.createElement("h4")
h4.textContent="your photho"
let p = document.createElement("p")
p.textContent="PHOTOGRAPHY"

caption.appendChild(h4)
caption.appendChild(p)

newimg.className=`your photo ${count}`
if(addimg.files.length > 0){
let imgfile = addimg.files[0]
newimg.src = URL.createObjectURL(imgfile)
}
// newimg.classList.add(".img-box")
let imglocal = JSON.parse(localStorage.getItem("localimg"))||[]
localStorage.setItem("localimg",JSON.stringify(imglocal))
let savedImages = JSON.parse(localStorage.getItem("localimg")) || [];
if(addimg.files.length > 0){
  let imgfile = addimg.files[0];
  let imgURL = URL.createObjectURL(imgfile);
  newimg.src = imgURL;
  imglocal.push(imgURL);  // خزّن الرابط فقط
  localStorage.setItem("localimg", JSON.stringify(imglocal));
}
divbox.appendChild(newimg); // الصورة الجديدة
imgbox.appendChild(divbox);
console.log(localStorage.getItem("localimg"))
console.log(imglocal)
// في بداية main.js أو بعد تعريف imgbox
window.addEventListener("DOMContentLoaded", () => {
  let savedImages = JSON.parse(localStorage.getItem("localimg")) || [];
  savedImages.forEach(src => {
      let divbox = document.createElement("div");
      divbox.className = "box";
      let imgEl = document.createElement("img");
      imgEl.src = src;
      divbox.appendChild(imgEl);
      imgbox.appendChild(divbox);
  });
});

count++

let iconbox = document.createElement("div")
iconbox.className="icon-box"
let trash = document.createElement("i")
trash.className="fa-solid fa-trash-can"

trash.classList.add("clak")
newimg.classList.add("box")
caption.classList.add("caplist")
p.classList.add("plist")
// divbox.appendChild(newimg)
divbox.appendChild(caption)
// divbox.appendChild(h4)
// divbox.appendChild(p)
imgbox.appendChild(divbox)
divbox.appendChild(newimg)
divbox.appendChild(caption)
caption.appendChild(iconbox)
caption.appendChild(trash)
let trashcreat =iconbox.appendChild(trash)
trashcreat.addEventListener("click",()=>{
  localStorage.clear()
  imglocal.length=0
  console.log(imglocal)
})

// trash.addEventListener('click',()=>{
//     boxl.forEach(function (boxdel) {
//         trash.addEventListener('click',()=>{
//             boxdel.remove()
//         })
//     });
// })    


  trash.addEventListener("click",()=>{
  divbox.remove()  
})




}

)

for(let k = 0; k < i.length; k++){
let chan = i[k]
chan.addEventListener('click',()=>{
    boxl.forEach(function(boxl) {
      boxl.addEventListener("click", function() {
boxl.remove()
    })
    }
    
)})
}


saveimg.forEach(function(save) {
  save.addEventListener("click", () => {
    if (save.classList.contains("save")) {
      save.textContent = "save";
      save.classList.remove("save");
      save.classList.add("buttonsave");
   
          } else {
      save.textContent = "delat save";
      save.classList.add("save");
      save.classList.remove("buttonsave");
      //   let buttonaray = JSON.parse(localStorage.getItem("savedelat")) || []
      // buttonaray.push(save)
      //       localStorage.setItem("savedelat", JSON.stringify(buttonaray))
      //       save.appendChild(localStorage.getItem("savedelat"))
      //       console.log(buttonaray)
    }
  });
});


  localStorage.setItem("myclick", JSON.stringify(buttonaray))

function get(){
   let getl = JSON.parse(localStorage.getItem("myclick"))
}







for(let i =0; i < get.length;i++){
}

buttonaray.push(saveimg)

console.log(buttonaray)





