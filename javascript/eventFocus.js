const input = document.querySelectorAll('.subInputBox input');
const label = document.querySelectorAll('.subInputBox label');

eventFocus(input[0], label[0]);
eventFocus(input[1], label[1]);
eventFocus(input[2], label[2]);

function eventFocus(input, label){

    input.addEventListener('focus', e=>{

        label.style.color = '#2A7AE4';
    
    });
    
    
    input.addEventListener('blur', e=>{
    
        label.style.color = '#464646';
    
    });

}



    

