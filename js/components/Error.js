class Error{
    render(){
        const html = `
            Something's wrong..<br>
            No access to the product list<br>
            API Not Found
        `;

        ROOT_ERROR.innerHTML = html;
    }
}

const pageError = new Error;

