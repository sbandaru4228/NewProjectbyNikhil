
function Greet(props) {
    const { firstName, LastName} = props;
    // console.log(data);
  
    // // Check if data is provided before attempting to destructure
    // const { address, salary } = data || {};
  
    return (
      <div>
        {props.firstName}{props.LastName}
        {firstName} {LastName} 
        
      </div>
    );
  }
  
  export default Greet;