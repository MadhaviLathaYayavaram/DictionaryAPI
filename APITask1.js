// FreeDictionary API
async function getWord() {
    const data = await 
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello" , {method:"GET"});
    const description=await data.json();
    return description;
  }
  
  
    async function displayInfo() {
    const wordinfo = [] =await getWord();
       

    const wd = document.getElementById("l1");
    wd.innerHTML = "<p>"+wordinfo[0].word+"</p>";
    document.body.append(wd);

    const wd2 = document.createElement ("h2");
    wd2.innerHTML="<p>"+"Hi Madhavi"+"</p>";
    document.body.append(wd2);
  /*
    const  = document.getElementById("");
    cid.setAttribute("class","column");
    cid.innerHTML += id+"<div class=\"container\"><p class=\"text\">"+"  Image"+"<div class=\"overlay\"><img src=\""+strlink+"\" alt=\"Pussy Cat\" class=\"image\"></div></p></div>"
   
    document.body.append(wordinfo[0].word);
   
    const cdt = document.getElementById("catdate");
    cdt.setAttribute("class","column")
    cdt.innerHTML += "<p>"+dt+"</p>";
    document.body.append(cdt);
  
    const ctag = document.getElementById("cattag");
    ctag.setAttribute("class","column")
    ctag.innerHTML += "<p>"+tag+"</p>";
    document.body.append(ctag);
      });*/
  } 
  
  displayInfo();
  
  