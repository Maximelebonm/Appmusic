import "../helpers/string.helpers";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const ValidationScreen = () => {
    const[searchParams]= useSearchParams();
    const token = searchParams.get("t");

    const [message, setMessage] = useState(null);

    const valid = () =>{
        console.log("validok")
        fetch("http://localhost:5006/appuser/validate", {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({token}),
        })
        .then((resp) => resp.text())
        .then((text) => {
            const data = text.toJson();
            if(data.result){
                document.cookie = `auth=${data.token};max-age=${60*60*24}`;
            }
            else{
                document.cookie = `auth=null;max-age=0`;
            }
            console.log("fetchvalid");
        });
    }

    return (
        <>
        <div className="authscreen">
            <div className="textvalidscreen">
                Pour finaliser votre inscription, clicker sur le bouton ci dessous.
            </div>

        <button className="btnValid" onClick={valid}>Cliker pour valider</button> 
        </div>
        </>
    );
};
export default ValidationScreen