const folderList = document.getElementById('.content__list')

function addNewFolder(folderUrl) {
    const newFolder = document.createElement('li');
    
    const newLink = document.createElement('a');
    newLink.href = folderUrl;
    newLink.textContent = folderUrl;
    
    newFolder.appendChild(newLink);
    
    folderList.appendChild(newFolder);
}

const newFolderURL = 'https://github.com/razrabot4ik123two/home-work/commits?author=razrabot4ik123two';
    addNewFolder(newFolderURL)
