class LoginPage extends HTMLDivElement {
  constructor() {
    super();

    this.innerHTML = ` 
      <div>adasd</div>
    `;
  }
}

window.customElements.define('login-page', LoginPage, { extends: 'div' });
let imageArray = ["1.png", "2.png", "3.png", "4.png"];
let imageIndex=0;

function changeImage(){
    img1.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if(imageIndex>=imageArray.length){
    imageIndex=0;
    }
}
setInterval(changeImage,2000);
export default LoginPage;
