
$(document).ready(function () {
   loadContent('index.html')
})

// Load the child HTML file into the appropriate block
function loadContent(childFile) {
    fetch(childFile)
        .then(response => response.text())
        .then(content => {
            // Extract the content from the child file
            const childContent = extractContent(content);

            // Insert the child content into the main block
            const contentBlock = document.getElementById('content');
            contentBlock.innerHTML = childContent;

            // Execute any additional JavaScript specific to the child file
            executeChildScripts(content);
        })
        .catch(error => {
            console.error('Error loading content:', error);
        });
}

// Extract the content from the child file
function extractContent(html) {
    const startTag = '<main>';
    const endTag = '</main>';

    const startIndex = html.indexOf(startTag) + startTag.length;
    const endIndex = html.indexOf(endTag);

    return html.slice(startIndex, endIndex).trim();
}

// Execute any additional JavaScript specific to the child file
function executeChildScripts(html) {
    const scriptRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    const scripts = html.match(scriptRegex);

    if (scripts) {
        scripts.forEach(script => {
            const scriptTag = document.createElement('script');
            scriptTag.innerHTML = script;
            document.body.appendChild(scriptTag);
        });
    }
}
