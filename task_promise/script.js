
fetch("https://server-for-promises.herokuapp.com/temp/story.json")
    .then(response => response.json())
    .then(response => {
        let header = document.createElement("h1");
        header.innerHTML = response.header;
        document.body.insertBefore(header, document.querySelector(".loading"))
        return Promise.all(Object.values(response.chapters)
                            .map(url => fetch(url)
                                .then(item => item.json())))
    })
    .then(item => {
        item.sort((a,b) => {
            return +a.chapterNumber[8] - +b.chapterNumber[8]
        });
        item.forEach((item) => {
            let pHeader = document.createElement('h4');
            pHeader.innerHTML = item.chapterNumber;
            document.body.appendChild(pHeader)
            let par = document.createElement('p');
            par.innerHTML = item.chapterText;
            document.body.appendChild(par);
        })
    })
    .then(item => document.querySelector(".loading").style.display = "none")
