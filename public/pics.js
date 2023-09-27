const back = document.getElementById('btnback')
const next = document.getElementById('btnnext')
const picbox = document.getElementById('picture')
const desc = document.getElementById('picdesc')

// async function getPicArray() {
//     const response = await axios.get("../picsarray")
//     pics = response.data.pics
//     return response.data.pics
// }

document.addEventListener("DOMContentLoaded", async function(){
    const response = await axios.get("../picsarray")
    const array = response.data.pics
    let index = 0
    picbox.setAttribute("src", array[index].link)
    picbox.setAttribute("alt", array[index].desc)
    desc.innerHTML=array[index].desc

    next.addEventListener('click', function(){
        
        if (index == array.length -1){
            index = 0
        }
        else {
            index += 1
        }
        picbox.setAttribute("src", array[index].link)
        picbox.setAttribute("alt", array[index].desc)
        desc.innerHTML=array[index].desc

    })

    back.addEventListener('click', function(){
        
        if (index > 0){
            index = index - 1
        }
        else{
            index = array.length -1
        }
        picbox.setAttribute("src", array[index].link)
        picbox.setAttribute("alt", array[index].desc)
        desc.innerHTML=array[index].desc
    })

})




    
