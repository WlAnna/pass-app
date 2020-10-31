console.log('This is contact.js front end')

$('form').on('submit', (e) => {
    e.preventDefault();

    const name = $('#name').val().trim()
    const email = $('#email').val().trim()
    const message = $('#message').val().trim()

    const data = {
        name,
        email,
        message
    }

    console.log(data)

    $.post('/email', data, () => {
        console.log('Server received our data')
    })


})


