import "./NavigationBar.css";

function NavigationBar() {
    return (
        <div className="navigationBarPanel">
            <a href="/"> Home </a>
            <a href="/machines"> Machines </a>
            <a href="/checklist"> Checklist </a>
            <a href="/usermenu"> User Menu </a>
            <a href="/problems"> Problems </a>
            <a href="/submitform"> Submit Form </a>
            <a href="/login"> Login Screen </a>
            <a href="/admin"> Admin Menu </a>
        </div>
    )
}

export default NavigationBar;