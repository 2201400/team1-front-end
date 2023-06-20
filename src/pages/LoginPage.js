class LoginPage extends HTMLDivElement {
  constructor() {
    super();

    this.innerHTML = ` 
      <div 
            style="
                display: flex;
                justify-content: center; /* 가운데 정렬을 위해 수정 */
                align-items: center; /* 수직 방향 가운데 정렬을 위해 수정 */
                height: auto;
                
            "
        >
            <div 
                class="left" 
                style="
                    height: 700px; 
                    width: 430px; 
                    background-image: url(phones.png);  
                    background-repeat: no-repeat;
                    transform: scale(1.1);
                    margin-right: 40px; /* 간격을 조정하는 부분. 값 변경에 따라 수정하세요. */
                "
            >    
                <img 
                    id = "img1"
                    alt="" 
                    style="position: relative; top: 28px; left: 155px"
                />
            </div>
            <div class="right" style="margin-top: -150px;">
                <div  
                    style="
                        display: flex;
                        flex-direction: column;
                        flex-wrap: nowrap;
                        align-content: center;
                        align-items: stretch;
                        justify-content: center;
                        width: 350px;
                        background-color: white;
                        border: 2px solid rgb(0,127,160);
                        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
                        border-radius: 10px;
                        padding: 40px;
                    "
                >
                    <img 
                        src="2951.png" 
                        style="padding: 0px 120px 30px 120px" 
                        alt=""
                    />
                    <input 
                        type="text" 
                        placeholder="사용자아이디"
                    />
                    <input 
                        type="password"
                        placeholder="비밀번호"
                    />
                    
                    <button 
                        style="
                            background-color: rgb(0,159,201);
                            text-align: center;
                            color: white;
                            border-radius: 10px;
                            margin-top: 15px;
                            padding: 10px;
                            -webkit-text-stroke: 0.5px white;
                            cursor: pointer;
                            border: none;
                        "
        
                    >     
                        로그인
                    </button>
                    
                </div>
                <div 
                    style="
                        background-color: white; 
                        border: 2px solid rgb(0,127,160);
                        border-radius: 10px;
                        text-align: center;
                        padding: 20px;
                        font-size: large;
                        font-weight: 400;
                        margin-top: 20px;
                    "
                >
                    회원가입 해야겠지?
                    <a style="color: rgb(51,153,180); ">가입하기</a>
                </div>    
            </div>
        </div>
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
