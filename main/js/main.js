let book = { 
    colors : ['black','white','blue','brown','orange','red','purble','grey','yellow'] , 
    title : '',
    subtitle : '', 
    author : '' ,
    background_color : '',
    publisher : '' ,
    publishing_year : '' ,

    checkTheColor : function () {
       const result = this.colors.findIndex((color)=>{
           return this.background_color.toLowerCase().includes(color)
       })
       if (result > -1) {
           return this.background_color
       }
       else {
        return alert(`${this.background_color} is not found try another color`)
       }
    }
    

}





// the new Classes added after submit button 
const newClasses = function () {
    

    // add class to the div contain the form
    const elParent = document.querySelector('.show-div')
    elParent.classList.add('after-sub') 

    // add class to the form 
    const elForm = document.getElementById('book-info')
    elForm.classList.add('book-info-shown')

    // add class to the left part of the form 
    const elRight = document.querySelector('.part-right')
    elRight.classList.add('part-right-shown')

    // add class to the right part of the form 
    const elLeft = document.querySelector('.part-left')
    elLeft.classList.add('part-left-shown')
    
    // add class to the button of generate 
    const elButton = document.querySelector('.btn-sub')
    elButton.classList.add('btn-sub-shown')

    // add class to the form item 
    const elItem = document.querySelector('.form-item')
    elItem.classList.add('form-item-shown')

    // add class to the results 
    const elRes = document.getElementById('results')
    elRes.classList.add('results-shown')

}

// Save the inputs value to our book object 
const saveInfo = ()=> {
 // save the title 
 const elTitle = document.getElementById('title')
 book.title = elTitle.value
 const elSubtitle = document.getElementById('subtitle')
 book.subtitle = elSubtitle.value
 const elBackground = document.getElementById('background')
 book.background_color = elBackground.value
 const elPublish = document.getElementById('publisher')
 book.publisher = elPublish.value
 const elYear = document.getElementById('publishing-year')
 book.publishing_year = elYear.value
 const elAuthor = document.getElementById('author')
 book.author = elAuthor.value
}





// results.section 
const elDomView = function (book) {
    const elDiv = document.createElement('div')
    elDiv.classList.add('Parent')
    elDiv.innerHTML = `<div class='item'>
    <h3>Title</h3>
    <p>${book.title}</p>
    </div>
    <div class='item'>
    <h3>Author</h3>
    <p>${book.author}</p>
    </div>
    <div class='item'>
    <h3>Subtitle</h3>
    <p> ${book.subtitle} </p>
    </div>
    <div class='item'>
    <h3>Background</h3>
    <p>${book.checkTheColor()}</p>
    </div>
    <div class='item'>
    <h3>Publisher</h3>
    <p>${book.publisher}</p>
    </div>
    <div class='item'>
    <h3>Publishing year</h3>
    <p>${book.publishing_year}</p>
    </div>`

    document.getElementById('results').appendChild(elDiv)
   
}


//add event to button when clicked 
document.querySelector('.btn-sub').addEventListener('click' , function(e) {
    document.getElementById('main-page').style.width = '50%'
    document.getElementById('body').style.display = 'flex'
    newClasses()
    saveInfo()
    elDomView(book)
    document.querySelector('nav').style.display = 'none'
    document.querySelector('.results-shown').setAttribute('style',`background-color:${book.checkTheColor()};opacity:0.67`)
    


})
