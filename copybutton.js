document.addEventListener('DOMContentLoaded', () => {
    hljs.highlightAll();
    const codeBlock = document.getElementById('code');
    const copyButton = document.getElementById('copy-button');
    const copySuccess = document.getElementById('copy-success');

    

    const copyTextHandler = () => {
        const text = codeBlock.innerText;
        
        navigator.clipboard.writeText(text).then(
            () => {
                copySuccess.classList.add('show-message');
                setTimeout(() => {
                    copySuccess.classList.remove('show-message');
                }, 2500);
            },
            () => {
                console.log('Error writing onto the clipboard');
            }
        );
    };

    copyButton.addEventListener('click', copyTextHandler);
});
