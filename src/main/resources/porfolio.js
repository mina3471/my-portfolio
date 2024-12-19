// 동적 성장 차트 코드 (이전에 제공한 코드와 동일)
const ctx = document.getElementById('growthChart').getContext('2d');
const growthChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2023-03', '2023-05', '2023-07', '2023-09', '2023-11'],
        datasets: [{
            label: '인스타그램 팔로워',
            data: [1322, 1600, 2000, 2300, 2945],
            backgroundColor: '#FF1493',
            borderColor: '#FF1493',
            borderWidth: 2
        }, {
            label: '프로페셔널 대시보드',
            data: [436, 600, 1200, 3000, 8200],
            backgroundColor: '#9ACD32',
            borderColor: '#9ACD32',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            },
            x: {
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 14
                    }
                }
            }
        }
    }
});

// 모달 기능 코드 (이전에 제공한 코드와 동일)
function openModal(imgSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = 'flex';
    modalImg.src = imgSrc;
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

document.querySelector('.modal-content').addEventListener('click', function(event) {
    event.stopPropagation();
});