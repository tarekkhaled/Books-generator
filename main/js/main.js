let book = {
    title : '',
    subtitle : '', 
    author : '' ,
    background_color : '',
    publisher : '' ,
    publishing_year : ''

}

// the new Classes added after submit button 
const newClasses = function () {
    // change the style of the form 
    document.getElementById('book-info').classList.add('book-info-shown')

    document.querySelector('.show-div').classList.add('after-sub') 

    var form_item = document.getElementsByClassName('form-item')

    for (var i = 3 ; i < form_item.length ; i++)
    {
        form_item[i].classList.add('label-shown');
    }


}

let x = document.getElementById('book-info')

//add event to button when clicked 
document.querySelector('.btn-sub').addEventListener('click' , function(e) {
    
    newClasses()


})
