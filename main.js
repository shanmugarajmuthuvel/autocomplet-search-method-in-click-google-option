const search=document.querySelector(".search-input")
const input=search.querySelector("input")
const list=search.querySelector(".autocom-box")
const icon=search.querySelector(".icon")
const weblink=search.querySelector("a")
let manikharniga;
  input.onkeyup=(event)=>{
	    let userdata=event.target.value
		let emptyarray=[]
		if(userdata){
			        emptyarray=suggestions.filter((data)=>{
			        return data.toLocaleLowerCase().startsWith(userdata.toLocaleLowerCase())
			         })
		             emptyarray=emptyarray.map((data)=>{
				    return data=`<li>${data}</li>`
			      })
				   search.classList.add("active")
				    show(emptyarray)
				let allList=list.querySelectorAll("li")
				for(let i=0;i<allList.length;i++){
				allList[i].setAttribute("onclick", "poorin(this)")	
				}				
		   }
	 	    else{
			     search.classList.remove("active") 
		      }
  }
   function poorin(element){
			    let selectData = element.textContent
			     input.value=selectData
				  search.classList.remove("active") 
                 icon.onclick = ()=>{
        manikharniga = `https://www.google.com/search?q=${selectData}`;
        weblink.setAttribute("href",manikharniga);
        weblink.click();
				}
   }
  function show(item){
	  let listdata;
	  if(!item.length){
		uservalue=input.value
        listdata='<li>'+uservalue+'</li>'		
	  }
	  else{
		  listdata=item.join('')
	  }
	  list.innerHTML=listdata
  }