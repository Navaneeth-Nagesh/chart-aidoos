var show_chart_button = document.getElementById('show-chart');

show_chart_button.addEventListener('click', show_chart);

function show_chart() {
    document.querySelector('.overlay').classList.add('show');
}

document.querySelector('.close').addEventListener('click', hide_chart);

function hide_chart() {
    document.querySelector('.overlay').classList.remove('show');
}