!function () { let s = document.getElementById("tasks"), e = document.getElementById("diplom"), t = document.getElementById("tasksBlock"), l = document.getElementById("diplomBlock"), i = document.getElementById("burger"), o = document.getElementById("sidebar"), c = document.getElementById("overlay"), d = document.getElementById("body"); s.onclick = function () { e.classList.remove("active"), this.classList.add("active"), t.classList.remove("hidden"), l.classList.add("hidden"), o.classList.remove("show"), c.classList.remove("show") }, e.onclick = function () { s.classList.remove("active"), this.classList.add("active"), l.classList.remove("hidden"), t.classList.add("hidden"), o.classList.remove("show"), c.classList.remove("show") }, i.onclick = function () { d.classList.toggle("overflow"), c.classList.toggle("show"), o.classList.toggle("show") } }();


const folderList = document.getElementById('.content__list')

function addNewFolder(folderUrl) {
    const newFolder = document.createElement('li');
    
    const newLink = document.createElement('a');
    newLink.href = folderUrl;
    newLink.textContent = folderUrl;
    
    newFolder.appendChild(newLink);
    
    folderList.appendChild(newFolder);
}

const newFolderURL = 'https://github.com/new-folder';
    addNewFolder(newFolderURL)