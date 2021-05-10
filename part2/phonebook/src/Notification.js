export const Notificacion = ({notification}) =>{
    if(notification === null )
    return null;

    return <div className={ `message ${notification.type}`}>{notification.message}</div>
}

