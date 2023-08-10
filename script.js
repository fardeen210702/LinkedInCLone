const meBtn = document.querySelector('.Me')
const profile = document.querySelector('.profile')

meBtn.addEventListener('click', () => {
    if (profile.style.display == "none") {
        profile.style.display = "block"
    }
    else {
        profile.style.display = "none"

    }
})

const input = document.querySelector('#input')
const midContent = document.querySelector('.mid_content')

input.addEventListener('keydown', clickedFunction)

function clickedFunction() {
    if (event.key === "Enter") {
        console.log('wokring enter key');

    const newContent = ` <div class = "coloring">

    <div class="mid2_content">
    <div class="divide">
        <div class="user">
            <img src="./images/IMG_20230409_004343.jpg" alt="">

        </div>
        <div class="follower">
            <div>
                <h3>Fardeen Mohammed</h3>
                <li>Following</li>
            </div>
            <div class="div2">
                <li>Web Developer | student | st.marys college</li>
            </div>
        </div>
        
        </div>
        <i id="xbar1" class="fa-solid fa-xmark"></i>
    
    
</div>
<div class="mid3_content">
    <div class="mid4_content">
        <li id="paragraph">${input.value}
        </li>
    </div>
</div>


<div class="comment_section">
    <div class="div_comment">
        <div class="Like">
            <i class="fa-solid fa-thumbs-up"></i>
            <p>Like</p>
        </div>
        <div class="Comment">
            <i class="fa-solid fa-comment"></i>
            <p>Comments</p>

        </div>
        <div class="Repost">

            <i class="fa-solid fa-repeat"></i>
            <p>Repost</p>

        </div>
        <div class="Send">
            <i class="fa-solid fa-paper-plane"></i>
            <p>Send</p>
        </div>

        </div>
    </div>

</div>
    
    `
const newElement = document.createElement('div');
newElement.innerHTML = newContent;
midContent.appendChild(newElement)

// rightMainContent--------->

const newContent2 = `
<li>
<p>Fardeen uploaded a New Post ' ${input.value} '</p>
<span>just now</span>
</li>
`
const newElement2 = document.createElement('div');
newElement2.innerHTML = newContent2;
const information = document.querySelector('.information')

information.appendChild(newElement2)
// const xbar = document.querySelector('#xbar1');

newElement.querySelector('#xbar1').addEventListener('click',(e)=>{
    e.target.parentElement.parentElement.remove()
    newElement2.remove()
    
})

input.value=''




    }



}







// saveData()


// function saveData(){
//     localStorage.setItem('info',midContent.innerHTML)
// }
// function getData(){

//     midContent.innerHTML= localStorage.getItem('info')
// }
// getData()
// saveData()