document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (nome && email && mensagem) {
        const whatsappNumber = '11988463093';
        const message = `Nome: ${encodeURIComponent(nome)}%0AEmail: ${encodeURIComponent(email)}%0AMensagem: ${encodeURIComponent(mensagem)}`;
        const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;

        window.open(whatsappLink);
    } else {
        alert("Por favor preencha todos os campos.");
    }
});

// Gráfico
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2003', '2005', '2007', '2009', '2011', '2013', '2015', '2017', '2019', '2021'],
        datasets: [{
            label: '# de Refugiados',
            data: [1465, 3000, 5000, 8000, 12000, 18000, 25000, 35000, 50000, 77193],
            backgroundColor: 'rgba(33, 150, 243, 0.5)',
            borderColor: '#2196F3',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
