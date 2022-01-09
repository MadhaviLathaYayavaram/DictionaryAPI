async function getWord(word) {
  const data = await 
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}` , { method:"GET" });
  const description=await data.json();
  return description;
}


  async function displayInfo() {
    let val = document.getElementById('wordinput').value
  const wordinfo = [] = await getWord(val);
      console.log (wordinfo);
      console.log (wordinfo[0].word);
    
    document.getElementById('origin').innerHTML = wordinfo[0].origin
  const wd = document.getElementById("lists");
  wd.innerHTML = ''
  /* get the meanings of the word from the api */
  let meanings = wordinfo[0].meanings;
  for(let i = 0; i< meanings.length; i++) {
    let li = document.createElement('li')
    li.innerHTML = meanings[i].definitions[0].definition;
    console.log(li)
    wd.appendChild(li)

    document.getElementById('subtitle1').setAttribute ("style","color: blue");
    document.getElementById('subtitle2').setAttribute ("style","color: blue");
  }

} 