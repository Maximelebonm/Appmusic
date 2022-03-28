const ValidationScreen = () => {
    const valid = () =>{
        console.log("validok")
        fetch("http://localhost:5006/appuser/validate", {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
         
        })
        .then((resp) => resp.text())
    }
    return (
        <>
          <div className="authscreen">
        
        <button onClick={valid}>Clicker pour valider</button> 
        </div>
        </>
    );
};
export default ValidationScreen