     const usersData = [
    {
      name: "John Doe",
      email: "ㅤ",
      age: "28 years old",
      info: "A passionate wildlife enthusiast and photographer, often found exploring nature.",
      imgSrc: "images/jane-doe.png"
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      age: "28 years old",
      info: "An avid reader and aspiring novelist, Jane loves spending her weekends at local cafes.",
      imgSrc: "images/jane-smith.png"
    },
    {
      name: "ㅤ",
      email: "mikebrown@example.com",
      age: "45 years old",
      info: "Tech-savvy and innovative, Sarah is known for her cutting-edge software solutions.",
      imgSrc: "mike-brown.png"
    },
    {
      name: "Sarah Johnson",
      email: "sarahjohnson@example.com",
      age: "30 years old",
      info: "A fitness enthusiast, Alex enjoys hiking and participating in marathons around the country.",
      imgSrc: "/images/sarah-johnson.png"
    },
    {
      name: "Alex Martinez",
      email: "",
      age: "27 years old",
      info: "",
      imgSrc: "/images/alex-martinez.png"
    }
  ];

  function displayUsers() {
    const container = document.querySelector('.users-container');
    const template = document.querySelector('#user-template');

    usersData.forEach(users => {
      const userClone = template.content.cloneNode(true);
      userClone.querySelector('.user-image').src = users.imgSrc;
      userClone.querySelector('.user-name').textContent = users.name;
      userClone.querySelector('.user-email').textContent = users.email;
      userClone.querySelector('.user-age').textContent = users.age;
      userClone.querySelector('.user-info').textContent = users.info;
      container.appendChild(userClone);
    });
  }

  

  displayUsers();

  function addCloseButtonFunctionality() {
    const closeButtons = document.querySelectorAll('.btn-close');
  
    closeButtons.forEach(button => {
        button.textContent = '×'; 
      button.addEventListener('click', (event) => {
        event.preventDefault();
        const userContainer = button.closest('.user-container');
        if (userContainer) {
          userContainer.remove();
        }
      });
    });
  }

addCloseButtonFunctionality();
