/*-----------------------SHOW MENU---------------------------------*/
const showMenu = function (navId, toggleId) {
    const getNav = document.getElementById(navId);
    const getToggle = document.getElementById(toggleId);
    if (getNav && getToggle) {
        getToggle.addEventListener('click', () => {
            getNav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-menu', 'nav-toggle')

/*-----------------------REMOVE MENU ACTIVE LINK---------------------------------*/
const getLinks = document.querySelectorAll('.nav__link')
getLinks.forEach(function (e) {
    e.addEventListener('click', function () {
        const getNav = document.getElementById('nav-menu');
        getNav.classList.remove('show-menu')
    })
})

/*-----------------------SCROLL SECTION ACTIVE LINK---------------------------------*/
// Lấy ra các thẻ section chứa ID
const getSections = document.querySelectorAll('section[id]')
// Tạo hàm
function scrollActive() {
    // Gán giá trị kéo từ trên xuống theo trục Y/ pageYOffset pageXOffset
    const scrollY = window.pageYOffset + 200;
    // Begin forEach
    getSections.forEach(function (item) {
        // offsetHeight : đo chiều cao phần tử
        const sectionHeigth = item.offsetHeight;
        // offsetTop : Khoảng cách từ top đến phần tử 
        const sectionTop = item.offsetTop - 50;
        // Lấy ra id sau mỗi lần lặp
        getSection_id = item.id;
        // Lấy ra class có Href = id phần tử đang lặp
        const getCurrent_section = document.querySelector(`.nav__menu a[href*= ${getSection_id}]`)
        // Đoạn đường kéo > độ dài của phần tử - 50px và <= độ dài phần tử + khoảng cách từ phần tử đến Top
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeigth) {
            getCurrent_section.classList.add('nav__active')
        }
        else {
            getCurrent_section.classList.remove('nav__active')
        }
    })
    // End forEach
}
// Sự kiện kéo thanh scroll, tham số truyền vào là 1 function
window.addEventListener('scroll', scrollActive)

/*-----------------------SCROLL CHANGE BACKGROUND HEADER---------------------------------*/
// const scrollY = window.pageYOffset;
function scrollHeader() {
    const getHeader = document.querySelector('#header')
    if (this.scrollY >= 100) {
        getHeader.classList.add('scroll-header')
    }
    else {
        getHeader.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)

/*----------------------- SHOW SCROLL up---------------------------------*/

function scrollTop() {
    const getScroll = document.querySelector('.button__scroll')
    if (this.scrollY >= 560) {
        getScroll.classList.add('button__scroll-top')
    }
    else {
        getScroll.classList.remove('button__scroll-top')
    }
}

window.addEventListener('scroll', scrollTop)

/*-----------------------  SCROLL up---------------------------------*/


const getScrollTop = document.querySelector('.button__scroll')
if (getScrollTop) {

    getScrollTop.addEventListener('click', function () {
        
        window.scrollTo(0,0)
    })
}
