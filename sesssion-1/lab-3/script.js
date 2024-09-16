let res=[]
const data =async()=>{
    const response = await fetch('https://api.jikan.moe/v4/anime')
    res= (await response.json()).data
    display(res)
}

const describe = document.getElementById("Addingfromscript")
const display = (res) =>{
    describe.innerHTML=``;
    res.map((anime)=>{
        describe.innerHTML+=`<div class="card"><img src="${anime.images.jpg.image_url}"><h3>${anime.title}</h3><h4>Score: ${anime.score}</h4></div>`
    })
}



data()

const search= document.getElementById("searching")

function searching(){
    let val=search.value.toLowerCase();
    let filterlist=res.filter((element)=>{
        return element.title.toLowerCase().includes(val);
    })
    display(filterlist)
}
searching()