const pictures = [
    {
        img: "anikas-images/abi_archi.png",
        alt: "Image of Abi",
        link: "harleywolfley.github.com/anikas.photos"
    },
    {
        img: "anikas-images/couple.png",
        alt: "Image of Couple",
        link: "harleywolfley.github.com/anikas.photos"
    },
    {
        img: "anikas-images/group.png",
        alt: "Image of Group",
        link: "harleywolfley.github.com/anikas.photos"
    },
    {
        img: "anikas-images/plant-lake-banff-mtn.png",
        alt: "Image of Mountatin",
        link: "harleywolfley.github.com/anikas.photos"
    },
]

const galleryInput = document.querySelector("#gallery");

galleryInput.innerHTML = pictures.map(pictures => `<a href="${pictures.link}"><img class="gallery-images" src="${pictures.img}" alt="${pictures.alt}"></a>`).join("");