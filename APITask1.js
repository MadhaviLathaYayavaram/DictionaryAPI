// FreeDictionary API
async function getWord() {
    const data = await 
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello" , {method:"GET"});
    const description=await data.json();
    return description;
  }
  
  
    async function displayInfo() {
    const wordinfo = [] =await getWord();
        console.log (wordinfo);
        console.log (wordinfo[0].word);

    const wd = document.getElementById("l1");
    wd.innerHTML = "<p>"+wordinfo[0].word+"</p>";
    document.body.append(wd);

    const wd2 = document.createElement ("h2");
    wd2.innerHTML="<p>"+"Hi Madhavi"+"</p>";
    document.body.append(wd2);
  
  } 
  
  displayInfo();
  
  