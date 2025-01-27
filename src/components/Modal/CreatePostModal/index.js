import './CreatePostModal.css';
// import Modal from '..';
import { uploadImg } from '../../../api/thumbsnap';
import { createPost } from '../../../api/posts';

// TODO: 현재 접속한 유저 정보를 받아온다.
class CreatePostModal extends HTMLDivElement {
  constructor({ name }) {
    super();

    this.name = name;

    this.classList.add('create-post-modal', 'modal-dialog');
    this.setAttribute('role', 'document');

    this.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          <h5 class="modal-title">새 게시물 만들기</h5>
          <button type="button" class="btn btn-share" data-bs-dismiss="modal">공유하기</button>
        </div>
        <div class="modal-body">
          <div class="post-upload-img">
            <label for="uploadImg" class="upload-img-label">
              <img src="./post-temp1.jpeg" alt="upload-img">
            </label>
            <input type="file" name="post-img" id="uploadImg" hidden>
          </div>
          <div class="post-field">
            <div class="user-info">
              <img class="user-img" src="./juhyeonniinsta.jpg" alt="">
              <span class="user-name">${this.name}</span>
            </div>
            <textarea class="post-content" placeholder="문구 입력..." maxlength="2000"></textarea>
            <div class="post-assist">
              <div class="emoji-picker">                                     
                <button type="button" class="btn dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="/assets/image/icons/emoji.svg" alt="">
                </button>
                <div class="dropdown-menu">
                  <button class="btn btn-emoji">😂</button>
                  <button class="btn btn-emoji">😮</button>
                  <button class="btn btn-emoji">😍</button>
                  <button class="btn btn-emoji">😢</button>
                  <button class="btn btn-emoji">👏</button>
                  <button class="btn btn-emoji">🔥</button>
                  <button class="btn btn-emoji">🎉</button>
                  <button class="btn btn-emoji">💯</button>
                </div>
              </div>
              <span class="content-length">0/2000</span>
            </div>
          </div>
        </div>
      </div>
    `;

    // FIXME:
    // data set
    this.userName = this.querySelector('.user-name');
    this.postContent = this.querySelector('.post-content');
    this.uploadImg = this.querySelector('#uploadImg');
    // "post_top_img": "https://github.com/HyunjinHa.png",
    // this.postMainImg = this.querySelector('') // 이건 나중에 post할 때 데이터를 받고 추가함

    // for event
    this.shareBtn = this.querySelector('.btn-share');
    this.shareBtn.addEventListener('click', () => this.share());

    this.previewImg = this.querySelector('.upload-img-label > img');
    this.uploadImg.addEventListener('change', () => this.renderImg());

    // emoji picker
    this.emojiPicker = this.querySelector('.emoji-picker');
    this.emojiBtns = this.emojiPicker.querySelectorAll('.btn-emoji');
    this.emojiBtns.forEach((btn) => {
      btn.addEventListener('click', () => this.addEmoji(btn));
    });

    // textarea length
    this.contentLength = this.querySelector('.content-length');
    this.postContent.addEventListener('keyup', () => this.rewriteLength());
  }

  renderImg() {
    const file = this.uploadImg.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.previewImg.src = reader.result;
    };
    reader.readAsDataURL(file);
  }

  addEmoji(btn) {
    this.postContent.value += btn.textContent;
    this.rewriteLength();
  }

  rewriteLength() {
    this.contentLength.textContent = `${this.postContent.value.length}/2000`;
  }

  // FIXME:
  async share() {
    const file = this.uploadImg.files[0];
    const post = {
      name: this.name, // 나중에 로그인한 유저 정보를 받아와서 넣어줘야 함
      post_content: this.postContent.value,
      post_top_img: '',
      post_main_img: [await uploadImg(file)],
      statements: [],
      likes: 0,
    };

    createPost(post);
    console.log("sda");
  }
}

window.customElements.define('create-post-modal', CreatePostModal, {
  extends: 'div',
});

export default CreatePostModal;
