var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=324a472f04c94c618e7702cca1e7cc5c&q=moon&landing&by&apollo&11";

const sendHTTPRequest = (url, method, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {
        if (xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
        }
    }
    xhr.send();
};

sendHTTPRequest(url, 'GET', (res) => {
    console.log(res);

    res.response.docs.forEach(e => {

        let newArticle = document.querySelector('.main');

        let newHead = document.createElement('h1');
        newHead.innerText = e.headline.print_headline;
        newArticle.appendChild(newHead);
        let newSnippet = document.createElement('p');
        newSnippet.innerText = e.snippet;
        newArticle.appendChild(newSnippet);
        let newPubDate = document.createElement('div');
        newPubDate.innerText = e.pub_date;
        newArticle.appendChild(newPubDate);
        let newLink = document.createElement('a');
        newLink.href = e.web_url;
        newLink.innerText = 'Link to article';
        newArticle.appendChild(newLink);

    });
});