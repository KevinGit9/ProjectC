import "./NavigationBar.css";

function NavigationBar() {
    return (
        <div className="navigationBarPanel">
            <a href="/"><img src="visconlogo.png" className="logo"></img></a>
            <a href="/"> Home </a>
            <a href="/checklist"> Checklist </a>
            <a href="/usermenu"> Usermenu </a>
            <a href="/problems"> Problems </a>
            <a href="/submitform"> Submit Form </a>
        </div>
    )
}

export default NavigationBar;