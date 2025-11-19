import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./notes";

const App = () => {
    
 return (
        <div>
            <Header />
            
            {notes.map((note,index) => (
                <Note note={note}/>
            ))}
            <Footer />
        </div>
       
    )
}

export default App;