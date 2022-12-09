var btn=document.getElementsByClassName('search')
var clo=document.getElementsByClassName('close')
var shade=document.getElementsByClassName('shade')

btn[0].addEventListener('click',function () {
    shade[0].className='show'
})
clo[0].addEventListener('click',function () {
    var show=document.getElementsByClassName('show')
    show[0].className='shade'
})
