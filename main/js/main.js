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
    

    // add class to the div contain the form
    document.querySelector('.show-div').classList.add('after-sub') 

    // add class to the form
    document.getElementById('book-info').classList.add('book-info-shown')

    // add class to the left part of the form 
    document.querySelector('.part-right').classList.add('part-right-shown')

    // add class to the right part of the form 
    document.querySelector('.part-left').classList.add('part-left-shown')
    
    // add class to the button of generate 
    document.querySelector('.btn-sub').classList.add('btn-sub-shown')

    // add class to the form item 
    document.querySelector('.form-item').classList.add('form-item-shown')



    


}


//add event to button when clicked 
document.querySelector('.btn-sub').addEventListener('click' , function(e) {
    
    newClasses()


})
