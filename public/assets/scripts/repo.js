const container = document.querySelector('.container');

function getApiGithub() {
    fetch('https://api.github.com/users/cestpassion/repos')
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status);
            }

            var data = await res.json();

            data.forEach(item => {
                let card = document.createElement('div');
                card.classList.add('card');

                card.innerHTML = `
                    <div><img src="https://cdn-images-1.medium.com/max/1600/1*rOkXdNsjvEIHVO9CXJhtpA.jpeg" alt="Imagem do Repositório">
                    <br>
                    <br>
                    <h3>${item.name.toUpperCase()}</h3>
                    <p><strong>ID:</strong> ${item.id}</p>
                    <p>${item.description ? item.description : 'Ainda sem descrição'}</p>
                    <p><strong>Data de Criação:</strong> ${Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}</p></div>
                    <div><a href="repo.html?id=${item.id}" class="btn" target="_blank">Informações do repositório</a></div>
                `;

                container.appendChild(card);
            });

        }).catch(e => console.log(e));
}

getApiGithub();