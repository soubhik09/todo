const addTaskBtn = document.getElementById('addTaskBtn');
const inputPopup = document.querySelector('.input_popup');
const closeIcon = document.getElementById('closeIcon');
const inputBox = document.getElementById('inputBox');
const saveBtn = document.getElementById('saveBtn');
const taskBox = document.getElementById('taskBox');
const removeSms = document.querySelector(".removeSms");


addTaskBtn.addEventListener('click', function(){
    inputPopup.classList.add('active')
})

closeIcon.addEventListener('click', function(){
    inputPopup.classList.remove('active')
})

saveBtn.addEventListener('click', function(){
    inputPopup.classList.remove('active')
    let div = document.createElement('div');
    div.classList.add('text');
    div.innerHTML += `
    <div class="smsPart">
        <input type="checkbox" id="checkBox">
        <P class="smsText">${inputBox.value}</p>
    </div>
    <div>
        <i class="fa-solid fa-xmark removeSms" id="removeSms"></i>
    </div>
    
    `;
    taskBox.appendChild(div);
    inputBox.value = "";
})

taskBox.addEventListener('click', function (event) {
    if (event.target.classList.contains('removeSms')) {
        event.target.parentElement.parentElement.remove();
    }
});