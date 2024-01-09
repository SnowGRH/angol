export default function ValasztoView(props){
    return(
        <span>
        <select name="valasz" id="valasz">
        <option>{"Válasz:"}
        </option>
        {props.lista.map(function (valasz) {
            return <option value={valasz}>{valasz}</option>
        })}
        </select>
        </span>
    )
}