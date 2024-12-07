function SecondsCounter({ seconds }) {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            background: "#333",
            borderRadius: "5px",
            padding: "10px",
            fontSize: "2rem",
            color: "white"
        }}>
            <div style={{
                background: "#444",
                marginRight: "15px",
                padding: "15px",
                borderRadius: "5px",
                minWidth: "50px",
                textAlign: "center"
            }}>
                <i className="fa-solid fa-stopwatch fa-beat"></i>
            </div>

            <div style={{
                background: "#444",
                margin: "5px",
                padding: "15px",
                borderRadius: "5px",
                minWidth: "50px",
                textAlign: "center"
            }}>{Math.floor(seconds / 100000) % 10}</div>
            <div style={{
                background: "#444",
                margin: "5px",
                padding: "15px",
                borderRadius: "5px",
                minWidth: "50px",
                textAlign: "center"
            }}>{Math.floor(seconds / 10000) % 10}</div>
            <div style={{
                background: "#444",
                margin: "5px",
                padding: "15px",
                borderRadius: "5px",
                minWidth: "50px",
                textAlign: "center"
            }}>{Math.floor(seconds / 1000) % 10}</div>
            <div style={{
                background: "#444",
                margin: "5px",
                padding: "15px",
                borderRadius: "5px",
                minWidth: "50px",
                textAlign: "center"
            }}>{Math.floor(seconds / 100) % 10}</div>
            <div style={{
                background: "#444",
                margin: "5px",
                padding: "15px",
                borderRadius: "5px",
                minWidth: "50px",
                textAlign: "center"
            }}>{Math.floor(seconds / 10) % 10}</div>
            <div style={{
                background: "#444",
                margin: "5px",
                padding: "15px",
                borderRadius: "5px",
                minWidth: "50px",
                textAlign: "center"
            }}>{seconds % 10}</div>
        </div>
    );
}

export default SecondsCounter;
