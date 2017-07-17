
fetch("https://server-for-promises.herokuapp.com/temp/story.json")
    .then(response => response.json()) // fetch object with header and links on chapters
    .then(response => {                 //fetch all links asynchronously, append header into doc
        let header = document.createElement("h1");
        header.innerHTML = response.header;
        document.body.insertBefore(header, document.querySelector(".loading"))
        return Promise.all(Object.values(response.chapters)
                            .map(url => fetch(url)
                                .then(item => item.json()))) //parse into objects with headers and text
    })
    .then(item => {                     //sort objects according to headers numbers so that to
        item.sort((a,b) => {            //add them into doc in consistent way
            return +a.chapterNumber[8] - +b.chapterNumber[8]
        });
        item.forEach((item) => {        //add chapters with headers into doc
            let pHeader = document.createElement('h4');
            pHeader.innerHTML = item.chapterNumber;
            document.body.appendChild(pHeader)
            let par = document.createElement('p');
            par.innerHTML = item.chapterText;
            document.body.appendChild(par);
        })
    })
    .then(item => document.querySelector(".loading").style.display = "none") //switch off spinner
    .catch(error => {
        document.querySelector(".error").style.display = "block";   //handle errors for user
        document.querySelector(".errorcode").innerHTML = `Your error is: ${error}`;
        document.querySelector(".loading").style.display = "none"
    })
