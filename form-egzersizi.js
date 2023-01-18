// FORMLARLA CASILMAK: Bolum Sonu Egzersizi

/*
1: Formu Sec
2: Input Bilgisini UL icerisine Ekle
3: Form icindeki bilgiyi sifirla
4: Eger forma bilgi girilmezse kullaniciyi uyar
*/

let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit', formHandler)
const alertDOM = document.querySelector('#alert')

const alertFunction = (title, message, className="warning") =>`
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
`

function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector('#username')
    const SCORE = document.querySelector('#score')
    if(USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value) // Gönderdikten sonra sıfırladık
        USER_NAME.value = ""
        SCORE.value = ""
        alertDOM.innerHTML = alertFunction("Başarılı","Girdiğiniz Bilgiyi Listeden Kontrol Edebilirsiniz.","success")
    }else {
        alertDOM.innerHTML = alertFunction("Başarısız","Eksik Bilgi Girdiniz","danger")
    }
}

let userListDOM = document.querySelector('#userList')

const addItem = (userName, score) => {
    let liDOM = document.createElement('li')
    if(score >= 85){
        liDOM.classList.add('list-group-item','d-flex','justify-content-between','align-items-center')
        liDOM.innerHTML = `
        ${userName}
        <span class="badge badge-primary badge-pill greenscr">${score}</span>
        `
    }else if(score >= 51){
        liDOM.classList.add('list-group-item','d-flex','justify-content-between','align-items-center')
        liDOM.innerHTML = `
        ${userName}
        <span class="badge badge-primary badge-pill oscr">${score}</span>
        `
    }else if(score <= 50){
        liDOM.classList.add('list-group-item','d-flex','justify-content-between','align-items-center')
        liDOM.innerHTML = `
    ${userName}
    <span class="badge badge-primary badge-pill redscr">${score}</span>
    `
    }else{
        liDOM.classList.add('list-group-item','d-flex','justify-content-between','align-items-center')
    }
    userListDOM.append(liDOM)
}
