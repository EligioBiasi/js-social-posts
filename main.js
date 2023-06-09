const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];



// Milestone 1
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

// ottengo il container dove andranno le card dei post
const postContainer = document.getElementById('container');

// recupero dall'array di oggetti gli elementi che mi servono
    for(let i = 0;i<posts.length;i++){

        // scorro l'array oggetto per oggetto tramite una variabile
        const singlePost = posts[i];

        //recupero gli elementi che mi serve siano visibili
        const{content,media,likes,created}=singlePost;

        // uso un altra variabile per navigare nella matrioska di oggetti e recupero dagli elementi due valori necessari
        const user = singlePost.author;

        const userName =user.name;

        const userImage =user.image;

        //inserisco gli elementi nel template literal e ciclando nel for si creano le varie card con le info
        postContainer.innerHTML+=
    `<div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${userImage}" alt="">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${userName}</div>
                    <div class="post-meta__time">${created}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${content}</div>
        <div class="post__image">
            <img src="${media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>`
    };

// Milestone 2
// Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
    const idContainer=[];
    

    for(let y = 0; y<posts.length;y++){
        const likeButton = document.querySelectorAll('div.likes.js-likes')[y];
        const idFinder = posts[y];
        const{id}=idFinder;

        likeButton.children[0].addEventListener('click', function(){

            if(likeButton.children[0].lastElementChild.classList.contains('like-button--liked')){
                likeButton.children[0].lastElementChild.classList.remove('like-button--liked');
                let unlike = parseInt(likeButton.children[1].children[0].innerHTML)-1;
                likeButton.children[1].children[0].innerHTML = unlike;

            }else{
                likeButton.children[0].lastElementChild.classList.add('like-button--liked');
                likeButton.children[1].children[0].innerHTML;
                let like = parseInt(likeButton.children[1].children[0].innerHTML)+1;
                likeButton.children[1].children[0].innerHTML = like;
                idContainer.push(id);
            }
        })
    }


    