function Button({active, children, onClick}){
    if (active === true) {
        return <li><a onClick={onClick} className ="button-active">{children}</a></li>;
    }else{
        return <li><a onClick={onClick} className="button">{children}</a></li>
    }
}