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
