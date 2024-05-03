function Sample(input){
    const {food,data}=input;
    const{firstN,LastN,Salary,address}=data;
    const{state,city}=address
    // const fullAddress = `${input.data.address.city}, ${input.data.address.state}, ${input.data.address.country}`
    return (
        <div>
            This is sample component
            <h1>
                {food}{firstN}{LastN}{Salary}{city}{state}
            </h1>
        </div>
    );
}

export default Sample;