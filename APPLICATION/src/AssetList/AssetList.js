import React from 'react';
import "./AssetList.css"
import "./AssetListElement"
import AssetListElement from "./AssetListElement";
import {Navigate, useNavigate, useSearchParams} from "react-router-dom";

const AssetList = ({tableData}) => {
    const navigate = useNavigate();
    const [query, setQuery] = useSearchParams();

    const navToItem=(name)=>{
        navigate(`/asset/${name}?${query.toString()}`);
    }

    return (<table className={"AssetList"}>
        <thead>
        <tr>
            <td>
                <div>Asset Name</div>
            </td>
        </tr>
        </thead>
        <tbody>
        {tableData.map((item, index) => (
            <AssetListElement key={index} name={item.name} onClick={navToItem}></AssetListElement>))}
        </tbody>
    </table>)
}
export default AssetList;
