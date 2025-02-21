var allImgTags=document.images
console.log(allImgTags)

for(i=0;i<=5;i++)
{
    allImgTags[i].src=`./photos/${i}.jpg`
    allImgTags[i].addEventListener("click",function()
    {
        document.getElementById("bigImageContainer").style.display="flex"
        document.getElementById("bigImage").style.backgroundImage=`url(${this.src})`
    })

}

function closeWindow(){
    document.getElementById("bigImageContainer").style.display="none"  
}


//this javascript code is from 2nd batch......


// var img=document.images;
// console.log(img)
// for(i=0;i<=5;i++)
// {
//     img[i].src=`${i}.jpg`

// }
// function bigImageWindow(urlOfImg)
// {
//     document.getElementById("bigImage").style.display="flex"
//     document.getElementById("Image").style.backgroundImage=`url(${urlOfImg})`
// }
// function closeWindow()
// {
//     document.getElementById("bigImage").style.display="none"
// }