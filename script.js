
window.addEventListener('load', resize)
window.addEventListener('resize', resize)

const meal = document.querySelector('.meal');
const circle = document.querySelectorAll('.circle');
function resize(){
    if(meal.clientHeight < 150){
        circle.forEach(arrow => {
            arrow.style.height=`60%`;
        });
    }
    circle.forEach(arrow => {
        arrow.style.width=`${arrow.clientHeight}px`;
    });
}