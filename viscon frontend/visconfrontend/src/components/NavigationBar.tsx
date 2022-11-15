import "./NavigationBar.css";

function NavigationBar() {


    return (
        <div className="navigationBarPanel">
            <img src="visconlogo.png" className="logo"></img>
            <a href="/"> Home </a>
            <a href="/checklist"> Checklist </a>
            <a href="/usermenu"> Usermenu </a>
            <a href="/problems"> Problems </a>
        </div>
    )
}

export default NavigationBar;