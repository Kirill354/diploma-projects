window.addEventListener('DOMContentLoaded', function () {

    //попапы (вход и покупка подписки)
    const login = document.querySelector('.btns-header__login');
    const sub = document.querySelector('.sub__btn');
    const close_1 = document.querySelector('.popup-login__close');
    const close_2 = document.querySelector('.popup-sub__close');
    const popup_1 = document.querySelector('.popup_1');
    const popup_2 = document.querySelector('.popup_2');

    login.addEventListener('click', function () {
        popup_1.classList.add('_active');
    })
    sub.addEventListener('click', function () {
        popup_2.classList.add('_active');
    })
    close_1.addEventListener('click', function () {
        popup_1.classList.remove('_active');
    })
    close_2.addEventListener('click', function () {
        popup_2.classList.remove('_active');
    })

    popup_1.addEventListener('click', function (e) {
        if (!(e.target.closest('.popup-login__content'))) {
            popup_1.classList.remove('_active');
        }
    })
    popup_2.addEventListener('click', function (e) {
        if (!(e.target.closest('.popup-sub__content'))) {
            popup_2.classList.remove('_active');
        }
    })
    // -------------------------------------------


    //валидация формы

    new JustValidate('.about__form', {
        colorWrong: '#FF6F6F',
        rules: {
            name: {
                required: true,
                minLength: 2,
                maxLength: 20,
                // password: true
            },
            mail: {
                required: true,
                email: true
            },
        },
        messages: {
            name: {
                required: 'Поле обязательно',
                minLength: 'Ошибка',
                maxLength: 'Максимальное кол-вл символов: 20',
                // password: 'Ошибка'
            },
            mail: {
                required: 'Поле обязательно',
                email: 'Ошибка'
            },
        },
    });
    new JustValidate('.popup-login__form', {
        colorWrong: '#FF6F6F',
        rules: {
            login: {
                required: true,
                minLength: 2,
                maxLength: 20,
            },
            password: {
                required: true,
            },
        },
        // messages: {
        //     login: {
        //         required: 'Поле обязательно',
        //         minLength: 'Ошибка',
        //         maxLength: 'Максимальное кол-вл символов: 20',
        //     },
        //     password: {
        //         required: 'Поле обязательно',
        //     },
        // },
    });


    //кнопка проигрывателя песен в header   -  неправильный дизайн иконок
    // const playYes1 = document.querySelector('.header__lives__play-go_1');
    // const playYes2 = document.querySelector('.header__lives__play-go_2');
    // const playNo1 = document.querySelector('.header__lives__play-pause_1');
    // const playNo2 = document.querySelector('.header__lives__play-pause_2');
    // const play1 = document.querySelector('.header__lives__play_1');
    // const play2 = document.querySelector('.header__lives__play_2');

    // play1.addEventListener('click', function () {
    //     playYes1.classList.toggle('_active');
    //     playNo1.classList.toggle('_active');
    // })
    // play2.addEventListener('click', function () {
    //     playYes2.classList.toggle('_active');
    //     playNo2.classList.toggle('_active');
    // })

    const podcastsPlayYes = document.querySelector('.item-podcasts__button-play-go');
    const podcastsPlayNo = document.querySelector('.item-podcasts__button-play-pause');
    const podcastsPlay = document.querySelector('.item-podcasts__button-play');

    podcastsPlay.addEventListener('click', function () {
        podcastsPlayYes.classList.toggle('_active');
        podcastsPlayNo.classList.toggle('_active');
    })


    // бургер
    document.querySelector('.header__burger').addEventListener('click', function () {
        document.body.classList.toggle('_lock')
        document.querySelector('.header__burger').classList.toggle('_active')
        document.querySelector('.header__menu').classList.toggle('_active')
        document.querySelector('.header__submenu').classList.toggle('_active')
    });

    //форма
    document.querySelector('.btns-header__search').addEventListener('click', function () {
        document.querySelector('.header__form').classList.toggle('_active')
    });

    //что в эфире <479px
    document.querySelector('.header__lives-mobile').addEventListener('click', function () {
        document.querySelector('.header__lives').classList.toggle('_active')
        document.querySelector('.header__bottom').classList.toggle('_active')
    });

    //показ подкастов при <479px
    document.querySelector('.podcasts__button-more').addEventListener('click', function () {
        document.querySelector('.podcasts__column-visible').classList.toggle('_active')
        document.querySelector('.podcasts__button-more').classList.toggle('_active')
        document.querySelector('.podcasts__button-info').classList.toggle('_active')
    })

    // аккордион
    $(".accordion").accordion({
        collapsible: true,
        heightStyle: "content"
    });

    //перемещение по аккордиону tabs
    const tabsBtns = document.querySelectorAll('.accordion-guests__link');
    const tabsItems = document.querySelectorAll('.item-guests');
    const defaultImage = document.querySelector('.item-guests-default');

    tabsBtns.forEach(function (item) {
        item.addEventListener('click', function () {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute('data-tab');
            let currentTab = document.querySelector(tabId);
            // let defaultImage = document.querySelector('.item-guests-default');

            if (!currentBtn.classList.contains('_active')) {
                tabsBtns.forEach(function (item) {
                    item.classList.remove('_active');
                })
                tabsItems.forEach(function (item) {
                    item.classList.remove('_active');
                })

                currentBtn.classList.add('_active');
                currentTab.classList.add('_active');
            }

            if (!defaultImage.classList.contains('_block')) {
                defaultImage.classList.add('_block')
            }
        });
    });


    const accordionLinks = document.querySelectorAll('.accordion-guests__link[data-goto]');
    accordionLinks.forEach(accordionLink => {
        accordionLink.addEventListener("click", onMenuLinkClick)
    });
    function onMenuLinkClick(e) {
        const accordionLink = e.target;
        if (accordionLink.dataset.goto && document.querySelector(accordionLink.dataset.goto)) {
            const gotoBlock = document.querySelector(accordionLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
        }
    }


    // навигация сайта
    const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
    const footerLinks = document.querySelectorAll('.footer__link[data-goto]');
    footerLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick)
    });

    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick)
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;

            const Burger = document.querySelector('.header__burger');
            if (Burger.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                document.querySelector('.header__burger').classList.remove('_active');
                document.querySelector('.header__menu').classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }



    //select
    const element = document.querySelector(".select");
    const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: '',
        renderSelectedChoices: 'always',
    });

    //checkbox для изменения при нажатии <530px    НЕ РАБОТАЕТ!!!!!!!!!!!!
    const checkBoxes = document.querySelectorAll('.checkbox-label');

    checkBoxes.forEach(function (e) {
        e.addEventListener('click', function () {
            // e.classList.add('_active');
            // e.classList.toggle('_active'); //-не работает почему
            if (!(e.classList.contains('_active'))) {
                e.classList.add('_active');
            }
            else {
                e.classList.remove('_active');
            }
        })
    })

})





// -----------------------------------------------------------------------DA--------------------------------------------------------------------------

