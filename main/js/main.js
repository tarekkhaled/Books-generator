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

    document.querySelector('.part-right').classList.add('part-right-shown')

    document.querySelector('.part-left').classList.add('part-left-shown')

    


}

let x = document.getElementById('book-info')

//add event to button when clicked 
document.querySelector('.btn-sub').addEventListener('click' , function(e) {
    
    newClasses()


})
