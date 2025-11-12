const App = () => {
    const name = "Rumaisha";
    const currentdate = new Date()
        const year = currentdate.getFullYear();
    return (
        
        <div>
            <p>created by {name}</p>
            <p>copyright {year}</p>
        </div>
    )
}

export default App;