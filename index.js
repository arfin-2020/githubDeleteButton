const sections = document.querySelectorAll('section');
// console.log(sections[1].innerText);

// for (const section of sections){
//     section.style.border = "2px solid red";  
//     section.style.padding = "5px 10px 10px 0px";  
//     section.style.marginLeft = "10px";
//     section.style.borderRadius='15px';  
//     section.style.margin='15px';
//     section.style.borderWidth='5px';
//     section.style.backgroundColor='lightgrey';
// }


function makeRed(){
    document.body.style.backgroundColor = 'yellow';
}

const makeGreyButton = document.getElementById('buttonGrey');
makeGreyButton.onclick=makeGrey;

const makePurpleButton = document.getElementById('buttonPurple');
makePurpleButton.onclick=function Makepurple(){
    document.body.style.backgroundColor='purple'
};

function makeGrey(){
    document.body.style.backgroundColor='grey'
};

const MakePinkbutton = document.getElementById('make-pink');
MakePinkbutton.addEventListener('click',function makePink(){
    document.body.style.backgroundColor = 'pink';
})

const makeGoldenRod = document.getElementById('make-goldenRod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenRod';
})



// adding new posting function here...




const postingFunction = document.getElementById('Post-button').addEventListener('click',function(){
    const newPostTextField = document.getElementById('new-post');
    const fieldText = newPostTextField.value;
    const postTableContent = document.getElementById('postable-content');
    postTableContent.innerText = fieldText;
    newPostTextField.value = '';
    // console.log(newPostTextField);
});



// Github Delete action coding start



const textField = document.getElementById('text-field').addEventListener('keyup', function(e){
    const text = e.target.value;
    // console.log(text)
   const buttonDeleteDesabled =  document.getElementById('info-delete-button')
   
    if(text === 'delete' ){
        // console.log('if condition------', buttonDeleteDesabled);
        buttonDeleteDesabled.removeAttribute('disabled');
    }else{
        buttonDeleteDesabled.setAttribute('disabled',true)
    }
})



const deleteButton = document.getElementById('info-delete-button').addEventListener('click', function(){
    // console.log('cliked')
    const screateContent = document.getElementById('screate-info');
    screateContent.style.display = 'none';
});
