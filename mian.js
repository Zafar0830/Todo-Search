let elBtn=document.querySelector('.button');
let elInp=document.querySelector('.input');
let elForm=document.querySelector('.form');
let elList=document.querySelector('.list');
let elFilterInput=document.querySelector('#filter')




elForm.addEventListener('submit',addItem);
let fragment=document.createDocumentFragment();
function addItem(evt){
    evt.preventDefault();
    let Inpvalue=elInp.value.trim();
    elInp.value=null
    let ListItem=document.createElement("li");
    let NewBtn=document.createElement("button");
    NewBtn.classList="delet"
    NewBtn.textContent="x"
    ListItem.textContent=Inpvalue
    ListItem.appendChild(NewBtn);
    fragment.appendChild(ListItem);
    elList.appendChild(ListItem);
}

elList.addEventListener('click',removeList);

function removeList(a) {
    if (a.target.classList.contains('delet')) {
        if (confirm("O'chirilsinmi?")) {
            let li=a.target.parentElement;
            elList.removeChild(li)    
        }
    }
}

elFilterInput.addEventListener('keyup',filterItem);

function filterItem(evt) {
    let text=evt.target.value.toLowerCase()
    let items=elList.getElementsByTagName('li')
    Array.from(items).forEach(function (item) {
        let itemname=item.textContent.toLowerCase().indexOf(text)
        if (itemname!=-1) {
            item.style.display='flex' 
        }else{
            item.style.display='none'
        }
    })
}