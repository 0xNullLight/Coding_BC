document.addEventListener("DOMContentLoaded", () => {
    // Sample markdown files array (in a real application, this could be dynamic)
    const markdownFiles = [
        { name: "Visual Studio & Extensions", url: "./Notes/VS_Extensions.md" },
        { name: "JS via Key-Value Structures & Core Concepts", url: "./Notes/JS_via_Key-Value_Structures&Core_Concepts.md" },
        { name: "JS Additional Concepts & Skills", url: "./Notes/JS_Additional_Concepts&Skills.md" },
        { name: "JS vs TS Key-Value Structure", url: "./Notes/JSvsTS_Key-Value_Structure.md" },
        { name: "NodeJS & NPM Commends", url: "./Notes/NodeJS_NPM_Commends.md" },
        { name: "JS Conditional vs Unconditional", url: "./Notes/JS_Conditional vs Unconditional.md" },
        { name: "JS Understanding Primitive Types,Objects & Functions", url: "./Notes/JS_Understanding_Primitive_Types,Objects&Functions.md" },
        { name: "JS Objects, Functions & Methods", url: "./Notes/JS_Objects,Functions&Methods.md" },
        { name: "JS DOMs & Window Objects", url: "./Notes/JS_DOM&Window_Objects.md" },
        { name: "JS & CSS: Manipulating Classes, IDs and Elements", url: "./Notes/JS&CSS_Classes,IDs,Elements.md" }
    ];
    
    const dropdownEl = document.getElementById("file-dropdown");
    const markdownContentEl = document.getElementById("markdown-content");

    // Set default content
    markdownContentEl.innerHTML = "Select a markdown";

    // Add default option to the dropdown
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "--Select--";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    dropdownEl.appendChild(defaultOption);

    // Populate the dropdown menu with actual options
    markdownFiles.forEach(file => {
        const optionEl = document.createElement("option");
        optionEl.value = file.url;
        optionEl.textContent = file.name;
        dropdownEl.appendChild(optionEl);
    });

    dropdownEl.addEventListener("change", (event) => {
        const selectedUrl = event.target.value;
        if (selectedUrl) {
            fetch(selectedUrl)
                .then(response => response.text())
                .then(text => {
                    markdownContentEl.innerHTML = marked.parse(text);
                })
                .catch(error => console.error("Error loading Markdown file:", error));
        } else {
            markdownContentEl.innerHTML = "Select a markdown";
        }
    });
});
