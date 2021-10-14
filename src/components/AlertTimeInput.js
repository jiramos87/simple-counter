const AlertTimeInput = (props) => {
    return(
        <div>
         <input type="text" onChange={props.onChange} value={props.value} />
         
        </div>
        
    )
}
export default AlertTimeInput;