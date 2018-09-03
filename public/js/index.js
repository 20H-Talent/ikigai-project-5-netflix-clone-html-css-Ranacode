window.onscroll = function () { addBackgroundToNavbar() };

        const playButton = document.querySelector('.Netflix__Movie--buttons > button:first-child');
        const myListButton = document.querySelector('.Netflix__Movie--buttons > button:last-child');


        playButton.addEventListener('mouseover', changeButtonImage);
        myListButton.addEventListener('mouseover', changeButtonImage);

        playButton.addEventListener('mouseout', changeButtonImage);
        myListButton.addEventListener('mouseout', changeButtonImage);


        function changeButtonImage(e) {
            const button = e.target,
                img = button.querySelector('img'),
                path = "assets/icons";

            if (e.type === "mouseout") {
                img.src =
                    button.getAttribute("data-action") === "play"
                        ? `${path}/Line.png`
                        : `${path}/icon-plus.png`;
            } else {
                img.src =
                    button.getAttribute("data-action") === "play"
                        ? `${path}/btn-play-black.png`
                        : `${path}/icon-plus-black.png`;
            }
        }

        const header = document.querySelector(".Netflix__Header");
        const sticky = header.offsetTop;
        const navbar = header.querySelector('.Netflix__Navbar');

        function addBackgroundToNavbar() {
            navbar.style.backgroundColor = window.pageYOffset > sticky ? "rgba(20,20,20,0.9)" : "transparent";
        }