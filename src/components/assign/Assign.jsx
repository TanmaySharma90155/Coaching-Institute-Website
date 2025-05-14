import React from "react";
import "./assign.css";
import Logo from "../../assets/unnamed.jpg";

const Assign = () => {
    return (
        <div className="assign__container" id="assignments">
            <div className="assign__title"> 
                <img src={Logo} alt="Virmani Tutorials Logo" className="logo__image" />  
                <span className="title__text">Virmani Tutorials</span>
            </div>
            
            <div className="assign__head">
                Assignments
            </div>
            
            <div className="assign__classes">
                <div className="assign_center">
                    <a href="https://drive.google.com/drive/u/1/folders/1jYz6QRPxoLQWtKRowXeKb6p0x9JgjJTT">CLASS 6</a>
                </div>
                
                <div className="assign_center">
                    <a href="https://drive.google.com/drive/u/1/folders/1qew4WQ9iJo4Q9MbqICXnxZ4G4v1jLVil">CLASS 7</a>
                </div>
                
                <div className="assign_center">
                    <a href="https://drive.google.com/drive/u/1/folders/1FotW2CjJw_Wjj1Voz1wl4oYQvEYSYAT_">CLASS 8</a>
                </div>
                
                <div className="assign_center">
                    <a href="https://drive.google.com/drive/u/1/folders/1SlYd1BgvOkrXSQ8M4AohFdRf27G8yBgd">CLASS 9</a>
                </div>
                
                <div className="assign_center">
                    <a href="https://drive.google.com/drive/u/1/folders/1eEnG5VMKIS9TpLDSQWbG5g4K86mYp1mw">CLASS 10</a>
                </div>
                
                <div className="assign_center">
                    <a href="https://drive.google.com/drive/u/1/folders/1N8IiUYsmkAUpSiiTEtQlzo384oGMZDTW">CLASS 11</a>
                </div>
                
                <div className="assign_center">
                    <a href="https://drive.google.com/drive/u/1/folders/1o7pyrXrsebFBVwNVIT1ZkFO5XWb7BBrE">CLASS 12</a>
                </div>
            </div>
        </div>
    );
};

export default Assign;