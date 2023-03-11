fetch('https://upadhayay.github.io/db.json')
    .then(response => response.json())
    .then(data => {
        const papers = data.books.filter(book => book.published && (book.author === "Albert Einstein" || book.author === undefined));

        const papersBlock = document.querySelector('#papers-block');
        papers.forEach(paper => {
            const paperTitle = document.createElement('span');
            paperTitle.textContent = paper.title;

            const paperLink = document.createElement('a');
            paperLink.href = '#';
            paperLink.textContent = 'Read paper';

            const paperTitleLink = document.createElement('a');
            paperTitleLink.href = '#';
            paperTitleLink.appendChild(document.createTextNode(' ('));
            paperTitleLink.appendChild(paperLink);
            paperTitleLink.appendChild(document.createTextNode(')'));

            const paperBlock = document.createElement('div');
            paperBlock.classList.add('papers-block');
            paperBlock.appendChild(paperTitle);
            paperBlock.appendChild(paperTitleLink);

            papersBlock.appendChild(paperBlock);
        });
    });
