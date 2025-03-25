document.addEventListener('DOMContentLoaded', function() {
    const jobList = document.getElementById('job-list');

    // Example job listings
    const jobs = [
        {
            title: '高収入ドライバー',
            description: '夜間に高収入を得られるドライバーの仕事です。',
        },
        {
            title: '在宅データ入力',
            description: '自宅で簡単にできるデータ入力の仕事です。',
        }
    ];

    jobs.forEach(job => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<h3>${job.title}</h3><p>${job.description}</p>`;
        jobList.appendChild(listItem);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('お問い合わせありがとうございます。');
    });
});
