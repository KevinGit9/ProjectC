import "./NavigationBar.css";

function NavigationBar() {
    return (
        <div className="navigationBarPanel">
            <a href="/home"> Home </a>
            <a href="/machines"> Machines </a>
            <a href="/checklist"> Checklist </a>
            <a href="/usermenu"> User Menu </a>
            <a href="/problems"> Problems </a>
            <a href="/submitform"> Submit Form </a>
            <a href="/"> Login Screen </a>
            <a href="/admin"> Admin Menu </a>
            <a href="/Registration"> Admin Registration </a>
        </div>
    )
}

export default NavigationBar;