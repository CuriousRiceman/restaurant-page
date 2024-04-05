export default function loadHomepage() {
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '';
    const image = document.createElement('img');
    image.src = '';
    image.alt = 'Restaurant Image';
    contentDiv.appendChild(image);

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Our Restaurant';
    contentDiv.appendChild(headline);

    const paragraphs = [
        'We are delighted to have you here! At our restaurant, we offer a delightful dining experience with a blend of flavors and a cozy ambiance. Whether you\'re craving a hearty meal or looking to indulge in something sweet, our menu has something for everyone.',
        'Come join us and savor the exquisite dishes prepared by our talented chefs. From appetizers to desserts, each dish is crafted with passion and care, using the finest ingredients to ensure a memorable culinary journey for you.',
        'Visit us today and let us treat you to an unforgettable dining experience!'
    ];
    paragraphs.forEach(text => {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        contentDiv.appendChild(paragraph);
    });
}
  