const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn =document.getElementById('btn')
const hexColor= document.querySelector('.color')

btn.addEventListener('click',function(){

    let hexNumber="#"
    for(let i=0;i<6;i++)
    {
        hexNumber+=hex[Math.floor(Math.random()*hex.length)]
    }
    // const randNumber=Math.floor(Math.random()*hex.length)
    hexColor.textContent= hexNumber
    document.body.style.backgroundColor=hexNumber

})