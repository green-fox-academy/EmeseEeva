const main = document.querySelector('table');
const categoryS = document.querySelector('#category');
const publisherS = document.querySelector('#publisher');
const form = document.forms.filters;
const categ = form.category;
const publish = form.publisher;
const pricerange = form.pricerange;

const sendHttpRequest = (url, method, callback) => {
  const xmlRequest = new XMLHttpRequest();
  xmlRequest.onreadystatechange = () => {
    if (xmlRequest.status === 200 && xmlRequest.readyState === XMLHttpRequest.DONE) {
      callback(JSON.parse(xmlRequest.responseText));
    }
  }
  xmlRequest.open(method, url);
  xmlRequest.send();
}

const listBooks = (data) => {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
  const firstRow = document.createElement('tr');

  const baseTitle = document.createElement('th');
  baseTitle.innerText = 'Book title';

  const baseAuthorName = document.createElement('th');
  baseAuthorName.innerText = 'Authors\' name';

  const baseCategory = document.createElement('th');
  baseCategory.innerText = 'Category';

  const basePublsiher = document.createElement('th');
  basePublsiher.innerText = 'Publisher';

  const basePrice = document.createElement('th');
  basePrice.innerText = 'Book\'s price';

  firstRow.appendChild(baseTitle);
  firstRow.appendChild(baseAuthorName);
  firstRow.appendChild(baseCategory);
  firstRow.appendChild(basePublsiher);
  firstRow.appendChild(basePrice);

  main.appendChild(firstRow);

  data.forEach(e => {
    const row = document.createElement('tr');
    const title = document.createElement('td');
    title.innerText = e.book_name;

    const author = document.createElement('td');
    author.innerText = e.aut_name;

    const category = document.createElement('td');
    category.innerText = e.cate_descrip;

    const publisher = document.createElement('td');
    publisher.innerText = e.pub_name;

    const price = document.createElement('td');
    price.innerText = `${e.book_price} $`;

    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(category);
    row.appendChild(publisher);
    row.appendChild(price);

    main.appendChild(row);

  });
}

const fillPublisher = (data) => {
  const baseOption = document.createElement('option');
  baseOption.value = 'all';
  baseOption.innerText = 'All';
  publisherS.appendChild(baseOption);
  data.forEach(e => {
    const publisherOption = document.createElement('option');
    publisherOption.value = e.pub_name;
    publisherOption.innerText = e.pub_name;
    publisherS.appendChild(publisherOption);
  });
}

const fillCategory = (data) => {
  const baseOption = document.createElement('option');
  baseOption.value = 'all';
  baseOption.innerText = 'All';
  categoryS.appendChild(baseOption);
  data.forEach(e => {
    const categoryOption = document.createElement('option');
    categoryOption.value = e.cate_descrip;
    categoryOption.innerText = e.cate_descrip;
    categoryS.appendChild(categoryOption);
  });
}

form.addEventListener('change', () => {
  const postXmlRequest = new XMLHttpRequest();
  postXmlRequest.onreadystatechange = () => {
    if (postXmlRequest.status === 200 && postXmlRequest.readyState === XMLHttpRequest.DONE) {
      listBooks(JSON.parse(postXmlRequest.responseText));
    }
  }
  postXmlRequest.open('POST', '/filter');
  postXmlRequest.setRequestHeader('Content-Type', 'application/json');
  postXmlRequest.send(JSON.stringify({
    categ_name: categ.value,
    pub_name: publish.value,
    price_range: pricerange.value
  }));
});

sendHttpRequest('/books', 'GET', listBooks);
sendHttpRequest('/publisherselect', 'GET', fillPublisher);
sendHttpRequest('/categselect', 'GET', fillCategory);


/*const sendHttpRequest = (url, method, callback) => {
  const xmlRequest = new XMLHttpRequest();
  xmlRequest.open(method, url);
  xmlRequest.onload = () => {
    if (xmlRequest.status === 200) {
      callback(JSON.parse(xmlRequest.responseText));
    }
  }
  xmlRequest.send();
}
const URL = 'http://localhost:3000/books';

const container = document.querySelector('.container');

sendHttpRequest(URL, 'GET', (res) => {
  const data = res.data;
  console.log(data);

  const table = document.createElement('table');
  container.appendChild(table);

  const tableTitle = document.createElement('td');
  tableTitle.innerText = 'Book title';
  table.appendChild(tableTitle);


  const tableAuthor = document.createElement('td');
  tableAuthor.innerText = 'Author';
  table.appendChild(tableAuthor);

  const tableCategory = document.createElement('td');
  tableCategory.innerText = 'Category';
  table.appendChild(tableCategory);

  const pubName = document.createElement('td');
  pubName.innerText = 'Publisher name';
  table.appendChild(pubName);

  const bookPrice = document.createElement('td');
  bookPrice.innerText = 'Price';
  table.appendChild(bookPrice);

  data.forEach(element => {

    const titleCont = document.createElement('tr');
    titleCont.innerText = element.book_name;
    tableTitle.appendChild(titleCont);

    const authorCont = document.createElement('tr');
    authorCont.innerText = element.aut_name;
    tableAuthor.appendChild(authorCont);

    const categoryCont = document.createElement('tr');
    categoryCont.innerText = element.cate_descrip;
    tableCategory.appendChild(categoryCont);

    const pubNameCont = document.createElement('tr');
    pubNameCont.innerText = element.pub_name;
    pubName.appendChild(pubNameCont);

    const bookPriceCont = document.createElement('tr');
    bookPriceCont.innerText = element.book_price;
    bookPrice.appendChild(bookPriceCont);

  });

});

*/
