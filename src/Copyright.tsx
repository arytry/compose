function Copyright() {
    return (
        <p color="text.secondary">
            {'Copyright © '}
            <a color="inherit" className="App-link" href="https://arytry.com/">
                Arytry
            </a>{' '}
            {new Date().getFullYear()}.
        </p>
    );
}

export default Copyright;