class Spinner{
    handleClear(){
        ROOT_SPINNER.innerHTML = '';
    }

    render(){
        const html = `
            <img src="img/spinner.svg">
        `;
        
        ROOT_SPINNER.innerHTML = html;
    }
}

const pageSpinner = new Spinner;
