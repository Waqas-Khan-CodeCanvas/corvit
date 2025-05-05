
const btn = document.getElementById('addItem')
const list = document.getElementById('list')

function btnClick() {
    const text = document.createElement("li")
    text.textContent="New item";
    list.append(text)
}
