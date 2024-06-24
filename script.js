
const btnClick = document.querySelector('.click')
const popUpBox = document.querySelector('.popup_box')
const cancelBtn = document.querySelector('.btn1')
const deleteAcc = document.querySelector('.btn2')

btnClick.addEventListener('click', function(e) {
    e.preventDefault()
    // console.log('button clicked');
    popUpBox.classList.add('show')
})

cancelBtn.addEventListener('click', function(e) {
e.preventDefault()
// console.log('cancel button was clicked');
 popUpBox.classList.remove('show')
})

deleteAcc.addEventListener('click', function(e) {
    e.preventDefault()
    console.log('delete button clicked');
    popUpBox.classList.remove('show')
    btnClick.innerText = 'Account Deleted'
    alert('Your account deleted Succesfully')
    btnClick.classList.add('clicked')
})


