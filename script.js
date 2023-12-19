const percentages = document.querySelector('.percentage')
percentages.addEventListener('click', () => {
    window.alert(percentages.clientHeight)
});

window.addEventListener('load', resize)
window.addEventListener('resize', resize)

const meal = document.querySelector('.meal');
const circle = document.querySelectorAll('.circle');
function resize(){
    if(meal.clientHeight < 150){
        circle.forEach(arrow => {
            arrow.style.height=`60%`;
        });
    }else{
        circle.forEach(arrow => {
            arrow.style.height=`50%`;
        });
    }
    circle.forEach(arrow => {
        arrow.style.width=`${arrow.clientHeight}px`;
    });
}
const mealhomebtn = document.querySelector('.meal');
mealhomebtn.addEventListener('click', goToFood)



const dataBtn = document.querySelector('#dataBtn');
const foodBtn = document.querySelector('#foodBtn');
const homeBtn = document.querySelector('#homeBtn');
const chartBtn= document.querySelector('#chartBtn');
const userBtn = document.querySelector('#userBtn');

const dataPage =  document.querySelector('#datapage')
const foodPage =  document.querySelector('#foodpage')
const homePage =  document.querySelector('#homepage')
const chartPage=  document.querySelector('#chartpage')
const userPage =  document.querySelector('#userpage')

dataBtn.addEventListener('click', goToData)
foodBtn.addEventListener('click', goToFood)
homeBtn.addEventListener('click', goToHome)
chartBtn.addEventListener('click', goToChart)
userBtn.addEventListener('click', goToUser)

function goToData(){
    dataBtn.style.opacity = '30%';
    foodBtn.style.opacity = '60%';
    homeBtn.style.opacity = '60%';
    chartBtn.style.opacity= '60%';
    userBtn.style.opacity = '60%';
    dataPage.style.transform = 'translateX(-200%)';
    foodPage.style.transform = 'translateX(-200%)';
    homePage.style.transform = 'translateX(-200%)';
    chartPage.style.transform= 'translateX(-200%)';
    userPage.style.transform = 'translateX(-200%)';
}
function goToFood(){
    dataBtn.style.opacity = '60%';
    foodBtn.style.opacity = '30%';
    homeBtn.style.opacity = '60%';
    chartBtn.style.opacity= '60%';
    userBtn.style.opacity = '60%';
    dataPage.style.transform = 'translateX(-100%)';
    foodPage.style.transform = 'translateX(-100%)';
    homePage.style.transform = 'translateX(-100%)';
    chartPage.style.transform= 'translateX(-100%)';
    userPage.style.transform = 'translateX(-100%)';
}
function goToHome(){
    dataBtn.style.opacity = '60%';
    foodBtn.style.opacity = '60%';
    homeBtn.style.opacity = '30%';
    chartBtn.style.opacity= '60%';
    userBtn.style.opacity = '60%';
    dataPage.style.transform = 'translateX(0)';
    foodPage.style.transform = 'translateX(0)';
    homePage.style.transform = 'translateX(0)';
    chartPage.style.transform= 'translateX(0)';
    userPage.style.transform = 'translateX(0)';
}
function goToChart(){
    dataBtn.style.opacity = '60%';
    foodBtn.style.opacity = '60%';
    homeBtn.style.opacity = '60%';
    chartBtn.style.opacity= '30%';
    userBtn.style.opacity = '60%';
    dataPage.style.transform = 'translateX(100%)';
    foodPage.style.transform = 'translateX(100%)';
    homePage.style.transform = 'translateX(100%)';
    chartPage.style.transform= 'translateX(100%)';
    userPage.style.transform = 'translateX(100%)';
}
function goToUser(){
    dataBtn.style.opacity = '60%';
    foodBtn.style.opacity = '60%';
    homeBtn.style.opacity = '60%';
    chartBtn.style.opacity= '60%';
    userBtn.style.opacity = '30%';
    dataPage.style.transform = 'translateX(200%)';
    foodPage.style.transform = 'translateX(200%)';
    homePage.style.transform = 'translateX(200%)';
    chartPage.style.transform= 'translateX(200%)';
    userPage.style.transform = 'translateX(200%)';
}






