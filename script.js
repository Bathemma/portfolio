//turn pages when click next or prev button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((e1,index) => {
    e1.onclick = () => {
        const pageTurnId = e1.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if(pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
        else{
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            },500)
        }

    }
})

//Contact me button when click

const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact');

contactMeBtn.onclick = () => {
    pages.forEach((page,index) => {
        setTimeout(() => {
            page.classList.add('turn');
            setTimeout(() => {
                page.style.zIndex = 20 + index; 
            }, 500)

        }, (index + 1) *200 + 100)
        

    })
}

// create reverse index function
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex(){
    pageNumber--;
    if(pageNumber < 0){
        pageNumber = totalPages - 1;
    }
}

//Back profile button when click
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)

        }, (index + 1) * 200 + 100)

    })
}


// opening animation

const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

// opening animation(cover right animation)
setTimeout(() =>{
    coverRight.classList.add('turn');
}, 2100)

setTimeout(() =>{
    coverRight.style.zIndex = -1;
}, 2800)

// opening animation(page left or profile page animation)

setTimeout(() =>{
    pageLeft.style.zIndex = 20;
}, 3200)



// opening animation(all page right animation)

pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)

    }, (index + 1) * 200 + 2100)

})


// contact me

// const form = document.querySelector('form');
// const fullName = document.getElementById("name");
// const email = document.getElementById("email");
// const phone = document.getElementById("phone");
// const subject = document.getElementById("subject");
// const message = document.getElementById("message");
// function sendEmail() {
//     const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "chinthabathi12@gmail.com",
//         Password : "E40636BD4386FE7EED9DD493A11896FD1E1F",
//         To : 'chinthabathi12@gmail.com',
//         From : "chinthabathi12@gmail.com",
//         Subject : subject.value,
//         Body : bodyMessage
//     }).then(
//       message => {
//         if(message == "OK"){
//             Swal.fire({
//                 title: "Success!",
//                 text: "Message Sent Successfully!",
//                 icon: "success"
//             });
//         }
//       }
//     );
// }

// form.addEventListener("submit",(e) => {
//     e.preventDefault();

//     sendEmail();
// });



