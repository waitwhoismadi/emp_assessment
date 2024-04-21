document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('skillsChart').getContext('2d');
    var skillsChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Teamwork', 'Leadership', 'Innovation', 'Technical Knowledge', 'Problem Solving'],
            datasets: [{
                label: 'Skill Level',
                data: [3, 4, 4, 5, 3],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scale: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
    });
});
