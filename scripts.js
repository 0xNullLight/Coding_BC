document.addEventListener("DOMContentLoaded", () => {
    // Sample markdown files array (in a real application, this could be dynamic)
    const markdownFiles = [
        { name: "JS_via_Key-Value_Structures&Core_Concepts", url: "/notes/JS_via_Key-Value_Structures&Core_Concepts.md" },
        { name: "JS_Additional_Concepts&Skills", url: "notes/JS_Additional_Concepts&Skills.md" }
    ];

    // Get the file-list and markdown-content elements
    const fileListEl = document.getElementById("file-list");
    const markdownContentEl = document.getElementById("markdown-content");

    // Variable to keep track of the current file
    let currentFile = null;

    // Populate the file list
    markdownFiles.forEach(file => {
        const linkEl = document.createElement("a");
        linkEl.className = "file-link";
        linkEl.href = "#";
        linkEl.textContent = file.name;
        linkEl.addEventListener("click", () => toggleMarkdown(file));
        fileListEl.appendChild(linkEl);
    });

    function toggleMarkdown(file) {
        if (currentFile === file.url) {
            // If the same file is clicked again, hide the content
            markdownContentEl.style.display = 'none';
            currentFile = null;
        } else {
            // Otherwise, show the content and load the new file
            fetch(file.url)
                .then(response => response.text())
                .then(text => {
                    markdownContentEl.innerHTML = marked.parse(text);
                    markdownContentEl.style.display = 'block';
                    currentFile = file.url;
                })
                .catch(error => console.error("Error loading Markdown file:", error));
        }
    }
});
