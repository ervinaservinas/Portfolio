const buttonAbout = document.querySelector(".button1")
const buttonResume = document.querySelector(".button2")
const buttonWork = document.querySelector(".button3")
const buttonBlog = document.querySelector(".button4")
const buttonContact = document.querySelector(".button5")



function myFunction() {
    document.getElementById("demo").style.display = "none";
    document.getElementById("demo").innerHTML = `
    <h2> ABOUT ME!</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at consequatur harum incidunt iure. Distinctio dolore eligendi hic laudantium magnam, nobis obcaecati quam quibusdam quos repellendus sint, temporibus, unde. Itaque?</p>
    <img class ="images" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.IG3fkurZ7BW7u2kA_agpxwAAAA%26pid%3DApi&f=1">
    
    `

}
function myFunction2() {
    document.getElementById("demo2").innerHTML = `
<div class = "d-flex">
<div >
<h2> ABOUT ME!</h2>
</div>
<div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at consequatur harum incidunt iure. Distinctio dolore eligendi hic laudantium magnam, nobis obcaecati quam quibusdam quos repellendus sint, temporibus, unde. Itaque?</p>
    <img class ="images" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.IG3fkurZ7BW7u2kA_agpxwAAAA%26pid%3DApi&f=1">
  </div> 
</div>
    
    `
}
