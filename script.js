const buttonAbout = document.querySelector(".button1")
const buttonResume = document.querySelector(".button2")
const buttonWork = document.querySelector(".button3")
const buttonBlog = document.querySelector(".button4")
const buttonContact = document.querySelector(".button5")


function myFunction() {
    document.getElementById("demo").style.display = "block";
    document.getElementById("demo").innerHTML = `
    <h2> Resume</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at consequatur harum incidunt iure. Distinctio dolore eligendi hic laudantium magnam, nobis obcaecati quam quibusdam quos repellendus sint, temporibus, unde. Itaque?</p>
    <img class ="images" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.IG3fkurZ7BW7u2kA_agpxwAAAA%26pid%3DApi&f=1">
    
    `

}

function myFunction2() {

    document.querySelector(".demo2").innerHTML = `
<div class="infoBody demo2" id="demo">
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
