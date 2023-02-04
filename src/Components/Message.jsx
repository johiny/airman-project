import React from 'react';

const Message = () => {
    let styles = {
        padding: "1rem",
        marginBottom: "1rem",
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold",
        backgroundColor: "#FF7700"
    }
    return(
        <div style={styles}>
            <p>Error al conectar</p>
        </div>
    )
}

export default Message
