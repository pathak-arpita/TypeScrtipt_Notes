type StatusProp = {
    status: "loading" | "success" | "error";
}
function PassingAdvanceProp({ status }: StatusProp) {
    let message;
    if (status === "loading") {
        message = "Loading...";
    } else if (status === "success") {
        message = "Data loaded successfully!";
    } else if (status === "error") {
        message = "An error occurred while loading data.";
    }
    
    return (
        <p style={{ fontSize: "20px", color: "blue" }}>{message}</p>
    )
}

export default PassingAdvanceProp;
