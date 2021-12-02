const buttonAbout = document.querySelector(".button1")
const buttonResume = document.querySelector(".button2")
const buttonWork = document.querySelector(".button3")
const buttonBlog = document.querySelector(".button4")
const buttonContact = document.querySelector(".button5")
const demo2 = document.getElementById("demo2")
const body = document.querySelector(".body")
const buttonDark = document.querySelector(".darkMode")


function myFunction() {
    document.getElementById("demo").style.display = "block";
    document.getElementById("demo").innerHTML = `
    <div class = "d-flex">
    <h2> Resume</h2>
</div>
<div class ="d-flex">
<div class = "infoResume">
<i class="fab fa-amazon"></i>
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet iste labore magnam nam numquam possimus qui quod sequi voluptatem?
 </div>
<div class = "infoResume">
<i class="fab fa-amazon"></i>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate eaque esse illo illum molestiae nulla placeat sit, voluptates! Repellendus?</div>
<div class = "infoResume">
<i class="fab fa-amazon"></i>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa doloribus facere in nemo neque odit perspiciatis voluptatum! Esse, id.
</div>
<div class = "infoResume">
<i class="fab fa-amazon"></i>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi facere molestiae necessitatibus placeat quidem quis quo recusandae tempora? Non, nulla?
</div>
    
</div>

    
    
    `

}

function myFunction2() {

    document.querySelector(".demo2").innerHTML = `
<div class=" demo2" id="demo">
    <h3> ABOUT ME</h3>
    <div>
    
        <div class="d-flex">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.70sQ3Wo0isIRZt34aF4JHQAAAA%26pid%3DApi&f=1">


            <p class="d-flex"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi asperiores
                consequuntur, cupiditate debitis delectus deserunt dolores ducimus eaque error, harum hic itaque
                laboriosam
                neque nobis porro, praesentium provident quasi quos reprehenderit temporibus tenetur unde vero vitae
                voluptas voluptatem voluptates voluptatum? Aperiam ea enim facilis nulla quo repellat totam
                voluptate? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, veniam. Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Minima, sit, totam? Accusamus aut dolorem dolores eum, facere
                fugiat fugit, hic libero magnam molestias necessitatibus nostrum odio placeat quasi reprehenderit ullam
                voluptate. Autem, doloremque et odit quas rerum tempore voluptas. Ad debitis enim facilis harum hic id
                ipsam nemo reprehenderit saepe?</p>

        </div>

        <div class="infoBody"  >
            <div class="d-flex">
                <h1>What can i do</h1>
            </div>
            <div class="d-flex">

                <div>
                    <div class="d-flex"><i class="fas fa-tools"></i></div>
                    <h2> Web Design Full Stack</h2>
                    <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, quaerat.</p></div>

                </div>
                <div>
                    <div class="d-flex"><i class="fas fa-hammer"></i></div>
                    <h2>Web design</h2>
                    <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, illum?</p></div>
                </div>
            </div>
        </div>
        <div>
            <div class="infoBody">
                <div class="d-flex">
                    <h1>Our clients</h1>
                </div>
                <div class="d-flex">

                    <div>
                        <div class="d-flex"><i class="fab fa-imdb"></i></div>
                        <h2> Web Design Full Stack</h2>
                        <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, quaerat.</p></div>

                    </div>
                    <div>

                        <div class="d-flex"><i class="fab fa-amazon"></i></div>
                        <h2>Web serveices</h2>
                        <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, illum?</p></div>
                    </div>
                    <div>
                        <div class="d-flex"><i class="fab fa-facebook-messenger"></i></div>
                        <h2>Design</h2>
                        <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, illum?</p></div>
                    </div>
                    <div>
                        <div class="d-flex"><i class="fab fa-snapchat-square"></i></i></div>
                        <h2>Full stack</h2>
                        <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, illum?</p></div>
                    </div>
                    <div>
                        <div class="d-flex"><i class="fab fa-reddit"></i></i></div>
                        <h2>Services</h2>
                        <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, illum?</p></div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
   
    `
}

function myFunction3() {
    document.querySelector(".demo3").innerHTML = `
<h3><p class ="d-flex">work</p></h3>
<div class ="d-flex">

<div class = "infoResume">
<i class="fab fa-snapchat-square"></i></i>
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet iste labore magnam nam numquam possimus qui quod sequi voluptatem?
 </div>
 
<div class = "infoResume">
<i class="fab fa-snapchat-square"></i></i>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate eaque esse illo illum molestiae nulla placeat sit, voluptates! Repellendus?</div>
 
</div>
<div class ="d-flex">
<div class = "infoResume">
<i class="fab fa-snapchat-square"></i></i>
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet iste labore magnam nam numquam possimus qui quod sequi voluptatem?
 </div>
<div class = "infoResume">
<i class="fab fa-snapchat-square"></i></i>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate eaque esse illo illum molestiae nulla placeat sit, voluptates! Repellendus?</div>
 
</div>
`
}

function myFunction4() {
    document.querySelector(".demo4").innerHTML = `
<p>blog</p>
<div class ="d-flex">

<div class = "infoResume">
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet iste labore magnam nam numquam possimus qui quod sequi voluptatem?
 </div>
<div class = "infoResume">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate eaque esse illo illum molestiae nulla placeat sit, voluptates! Repellendus?</div>
 
</div>
`
}

function myFunction5() {
    document.querySelector(".demo5").innerHTML = `
<div class="f-direction d-flex inputBox">
<div class ="d-flex">
<div> name <input> </div>
<div> surname <input> </div>
</div>

<div> e-mail<input> </div>
<div> phone number<input> </div>
<div>
<textarea id="w3review" name="w3review" rows="4" cols="50">
Your message here






`
}


// DARK MODE

// const themeSwitch = document.querySelector(".darkMode1")
//
// themeSwitch.addEventListener('change', () => {
//     document.body.classList.toggle('dark-theme')
// })
//
//
// function addDarkmodeWidget() {
//     new Darkmode().showWidget();
// }
//
// window.addEventListener('load', addDarkmodeWidget);
// let change = document.querySelector(".change")


buttonDark.onclick = () => {
    body.style.backgroundColor = "black"
    body.style.fontColor = "white"
}


//Get the button
let myButton = document.getElementById("myBtn")

window.onscroll = function () {
    scrollFunction()
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block"
    } else {
        myButton.style.display = "none"
    }
}

function topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}
