var modal = document.getElementById('myModal');

function openModal(category) {
    modal.style.display = "block";
    var items = {...}; // Your item data here

    var list = document.getElementById("modalItems");
    list.innerHTML = "";
    items[category].forEach(function(item) {
        var itemBox = document.createElement("div");
        itemBox.classList.add("item-box");

        var itemName = document.createElement("div");
        itemName.classList.add("item-name");
        itemName.textContent = item.name;

        var itemImage = document.createElement("img");
        itemImage.src = "images/" + item.name.toLowerCase() + ".jpg";
        itemImage.alt = item.name;

        var coinValue = document.createElement("span");
        coinValue.classList.add("coin-value");
        coinValue.textContent = "Coin Value: " + item.value;

        itemBox.appendChild(itemImage);
        itemBox.appendChild(itemName);
        itemBox.appendChild(coinValue);
        list.appendChild(itemBox);
    });
    document.getElementById("modalTitle").textContent = category.charAt(0).toUpperCase() + category.slice(1); // Capitalize first letter
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function searchItems() {
    var input, filter, ul, li, span, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("modalItems");
    li = ul.getElementsByClassName('item-box');
    for (i = 0; i < li.length; i++) {
        span = li[i].getElementsByClassName("item-name")[0];
        txtValue = span.textContent || span.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
