const plus=document.querySelector('.plus');
const minus=document.querySelector('.minus');
const valueElement=document.querySelector('.value');
const thumbnail=document.querySelector('.main-thumbnails');
const mainImage=document.querySelector('.main-img');
plus.addEventListener('click',(e)=>{
    let val=parseInt(valueElement.innerText);
    val=val+1;
    valueElement.innerText=val;
    // console.log(val);
});
minus.addEventListener('click',(e)=>{
    let val=parseInt(valueElement.innerText);
    val=val-1;
    if(val<0) val=0;
    valueElement.innerText=val;
    // console.log(val);
});
thumbnail.addEventListener('click',(e)=>{
    if(e.target.tagName==='IMG'){
        const newSrc=e.target.src.replace('-thumbnail','');
        mainImage.src=newSrc;
    }
    document.querySelectorAll('.main-thumbnails img').forEach(img=>img.classList.remove('active'));
    e.target.classList.add('active');
});
