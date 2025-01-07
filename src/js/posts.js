document.getElementById('post').addEventListener('click', function (e){
    e.preventDefault();
    const input = document.getElementById('name');
    const list = document.getElementById('postfeed');
    const newItem = input.value.trim();
    if (newItem) {
        const li = document.createElement('li');
        li.textContent = newItem;
        list.appendChild(li);
        alert( "Your post "+newItem+" added");
        input.value = ''; 
    } else {
        alert('Please enter a valid item!');
    }
});
      