//header elements 
const headerLogo = document.querySelector('.header__logo');
const headerSignin = document.querySelector('.header__nav__sign-in');
const headerNavMenu = document.querySelector('.header__nav__menu ul');

//main elements
const mainValue = document.querySelector('.main__value');
const mainImage = document.querySelector('.main__illustration');
const headerMenuElementsArr = [headerLogo, headerSignin, headerNavMenu, mainValue, mainImage];

//why elements
const whyNumbers = document.querySelector('.why-crappo__numbers');
const whyImage = document.querySelector('.why-crappo__content__image');
const whyText = document.querySelector('.why-crappo__content__text');

//trade elements
const tradeCheckCard = document.querySelector('.trade-securely__earnings__card');
const tradeCalculator = document.querySelector('.trade-securely__revenue-calculator__card');
const tradeCardsTitle = document.querySelector('.trade-securely__crypto-currencies__title');
const tradeCards = document.querySelector('.trade-securely__crypto-currencies__cards');

//features elements
const featureHeading = document.querySelector('.features__heading');
const featureSmartText = document.querySelector('.features__content__invest-smart__content-card');
const featureSmartImg = document.querySelector('.features__content__invest-smart__illustration-card');
const featureStatsText = document.querySelector('.features__content__statistics__content-card');
const featureStatsImg = document.querySelector('.features__content__statistics__illustration-card');
const featureGrowText = document.querySelector('.features__content__grow-profit__content-card');
const featureGrowImg = document.querySelector('.features__content__grow-profit__illustration-card');

//start mining elements
const miningCard = document.querySelector('.start-mining__card');
const miningCardContent = document.querySelector('.start-mining__card__content');
const miningCardSubscribe = document.querySelector('.start-mining__card__subscribe');

//footer 
const footerCard = document.querySelector('.footer');

//timelines
const headerMainTimeLine = anime.timeline();
const whyImgTextTimeLine = anime.timeline();
const tradeChkCalcTimeLine = anime.timeline();
const tradeCardsTitleTimeLine = anime.timeline();
const featureHeadingTimeLine = anime.timeline();
const featureSmartTimeLine = anime.timeline();
const featureStatsTimeLine = anime.timeline();
const featureGrowTimeLine = anime.timeline();
const miningCardTimeLine = anime.timeline();
const footerCardTimeLine = anime.timeline();

//checkers
let whyNumbersChecker = false;
let whyImgTxtChecker = false;
let tradeChkCalcChecker = false;
let tradeCardsTitleChecker = false;
let featureHeadingChecker = false;
let featureSmartChecker = false;
let featureStatsChecker = false;
let featureGrowChecker = false;
let miningCardChecker = false;
let footerCardChecker = false;

//onscroll functions 
function whyNumbersFunc(){
    if(whyNumbers.getBoundingClientRect().top <= window.innerHeight){
        whyNumbers.classList.remove('hidden');
        if(whyNumbersChecker === true){
            return;
        } else {
            anime({
                targets: whyNumbers.children,
                scale: [0, 1],
                easing: 'easeOutElastic(1, .6)',
                duration: 2000,
                delay: anime.stagger(200)
            }, 200);
            whyNumbersChecker = true;
        }
    }
}

function whyImgTextFunc(){
    if(whyImage.getBoundingClientRect().top <= 250){
        whyImage.classList.remove('hidden');
        whyText.classList.remove('hidden');
        if(whyImgTxtChecker === true){
            return;
        } else {
            whyImgTextTimeLine
            .add({
                targets: whyText.children,
                translateX: [500, 0],
                easing: 'easeOutBack',
                delay: anime.stagger(100)
            }, 0)
            .add({
                targets: whyImage,
                scale: [0, 1],
                opacity: [0, 1],
                easing: 'easeOutElastic(1, .6)',
                duration: 2000
            }, 0)
            whyImgTxtChecker = true;
        }
    }
}

function tradeChkCalcFunc(){
    if(tradeCheckCard.getBoundingClientRect().top <= 300){
        tradeCheckCard.classList.remove('hidden');
        tradeCalculator.classList.remove('hidden');
        if(tradeChkCalcChecker === true){
            return;
        } else {
            tradeChkCalcTimeLine
            .add({
                targets: tradeCheckCard.children,
                translateY: [500, 0],
                opacity: [0, 1],
                easing: 'easeOutBack',
                delay: anime.stagger(100)
            }, 0)
            .add({
                targets: tradeCalculator,
                scale: [0, 1],
                rotate: [90, 0],
                easing: 'easeOutElastic(1, .6)',
                duration: 2000
            }, 300)
            tradeChkCalcChecker = true;
        }
    }
}

function tradeCardsTitleFunc(){
    if(tradeCardsTitle.getBoundingClientRect().top <= 300){
        tradeCardsTitle.classList.remove('hidden');
        tradeCards.classList.remove('hidden');
        if(tradeCardsTitleChecker === true){
            return;
        } else {
            tradeCardsTitleTimeLine
            .add({
                targets: tradeCardsTitle.children,
                translateX: [500, 0],
                opacity: [0, 1],
                easing: 'easeOutBack',
                delay: anime.stagger(100)
            }, 0)
            .add({
                targets: tradeCards.children,
                translateY: [400, 0],
                rotate: [-10, 0],
                opacity: [0, 1],
                direction: 'reverse',
                easing: 'easeOutElastic(1, .6)',
                delay: anime.stagger(200),
                duration: 2000
            }, 400)
            tradeCardsTitleChecker = true;
        }
    }
}

function featureHeadingFunc(){
    if(featureHeading.getBoundingClientRect().top <= 300){
        featureHeading.classList.remove('hidden');
        if(featureHeadingChecker === true){
            return;
        } else {
            featureHeadingTimeLine
            .add({
                targets: featureHeading.children,
                translateX: [500, 0],
                opacity: [0, 1],
                easing: 'easeOutBack',
                delay: anime.stagger(100)
            }, 0)
            featureHeadingChecker = true;
        }
    }
}
function featureSmartFunc(){
    if(featureSmartImg.getBoundingClientRect().top <= window.innerHeight){
        featureSmartText.classList.remove('hidden');
        featureSmartImg.classList.remove('hidden');
        if(featureSmartChecker === true){
            return;
        } else {
            featureSmartTimeLine
            .add({
                targets: featureSmartText.children,
                translateY: [150, 0],
                rotateX: [10, 0],
                scale: [0, 1],
                easing: 'easeOutBack',
                delay: anime.stagger(100)
            }, 200)
            .add({
                targets: featureSmartImg,
                scale: [0, 1],
                rotate: [90, 0],
                easing: 'easeOutBack',
                delay: anime.stagger(100)
            }, 200)
            featureSmartChecker = true;
        }
    }
}
function featureStatsFunc(){
    if(featureStatsImg.getBoundingClientRect().top <= window.innerHeight){
        featureStatsImg.classList.remove('hidden');
        featureStatsText.classList.remove('hidden');
        if(featureStatsChecker === true){
            return;
        } else {
            featureStatsTimeLine
            .add({
                targets: featureStatsText.children,
                translateY: [150, 0],
                rotateX: [10, 0],
                scale: [0, 1],
                easing: 'easeOutBack',
                delay: anime.stagger(100)
            }, 200)
            .add({
                targets: featureStatsImg,
                scale: [0, 1],
                rotate: [90, 0],
                easing: 'easeOutBack',
                delay: anime.stagger(100)
            }, 200)
            featureStatsChecker = true;
        }
    }
}
function featureGrowFunc(){
    if(featureGrowImg.getBoundingClientRect().top <= window.innerHeight){
        featureGrowImg.classList.remove('hidden');
        featureGrowText.classList.remove('hidden');
        if(featureGrowChecker === true){
            return;
        } else {
            featureGrowTimeLine
            .add({
                targets: featureGrowText.children,
                translateY: [150, 0],
                rotateX: [10, 0],
                scale: [0, 1],
                easing: 'easeOutBack',
                delay: anime.stagger(100)
            }, 200)
            .add({
                targets: featureGrowImg,
                scale: [0, 1],
                rotate: [90, 0],
                easing: 'easeOutBack',
                delay: anime.stagger(100)
            }, 200)
            featureGrowChecker = true;
        }
    }
}

function miningCardFunc(){
    if(miningCard.getBoundingClientRect().top <= window.innerHeight){
        miningCardContent.classList.remove('hidden');
        miningCardSubscribe.classList.remove('hidden');
        miningCard.classList.remove('hidden');
        if(miningCardChecker === true){
            return;
        } else {
            miningCardTimeLine
            .add({
                targets: miningCard,
                translateY: [150, 0],
                rotateX: [90, 0],
                scale: [0, 1],
                easing: 'easeOutBack',
                delay: anime.stagger(100)
            }, 200)
            .add({
                targets: miningCardSubscribe,
                translateY: [-200, 0],
                rotate: [45, 0],
                scale: [0, 1],
                opacity: [0, 1],
                easing: 'easeOutBack',
                delay: anime.stagger(100)
            }, 700)
            .add({
                targets: miningCardContent,
                translateY: [-50, 0],
                rotate: [-45, 0],
                scale: [0, 1],
                opacity: [0, 1],
                easing: 'easeOutBack',
                delay: anime.stagger(100)
            }, 700)
            miningCardChecker = true;
        }
    }
}

function footerCardFunc(){
    if(miningCard.getBoundingClientRect().top <= window.innerHeight){
        footerCard.classList.remove('hidden');
        if(footerCardChecker === true){
            return;
        } else {
            footerCardTimeLine
            .add({
                targets: footerCard.children,
                translateY: [150, 0],
                rotateX: [10, 0],
                scale: [0, 1],
                easing: 'easeOutBack',
                delay: anime.stagger(100)
            }, 200)
            footerCardChecker = true;
        }
    }
}

window.onload = () => {
    window.scrollY = 0;
    headerMenuElementsArr.forEach(el => {
        el.classList.remove('hidden');
    });
    headerMainTimeLine
    .add({
        targets: headerNavMenu.children,
        translateX: [-200, 0],
        opacity: [0, 1],
        easing: 'easeOutBack',
        delay: anime.stagger(100)
    }, 300)
    .add({
        targets: headerLogo,
        translateY: [-150, 0],
        opacity: [0, 1],
        easing: 'easeOutBack',
        delay: anime.stagger(100)
    }, 300)
    .add({
        targets: headerSignin.children,
        translateX: [200, 0],
        opacity: [0, 1],
        easing: 'easeOutBack',
        delay: anime.stagger(100)
    }, 300)
    .add({
        targets: mainValue.children,
        translateX: [-500, 0],
        easing: 'easeOutBack',
        delay: anime.stagger(100)
    }, 200)
    .add({
        targets: mainImage,
        scale: [0, 1],
        opacity: [0, 1],
        easing: 'easeOutElastic(1, .6)',
        duration: 2000
    }, 800)
};

window.addEventListener('scroll', () => {
    whyNumbersFunc();
    whyImgTextFunc();
    tradeChkCalcFunc();
    tradeCardsTitleFunc();
    featureHeadingFunc();
    featureSmartFunc();
    featureStatsFunc();
    featureGrowFunc();
    miningCardFunc();
    footerCardFunc();
});