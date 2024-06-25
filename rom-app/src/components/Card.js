function Card(props){
    // props: Distructuring object
    // const {imageURL,desc} = props 
    // we use it in order to remove props in fn but the same method. whatever!
    return(
        <>
        <div class="card" style={{width: '18rem', height:'26rem'}}>
            <img
              src={props.imageURL} 
              class="card-img-top" 
              alt="photo"
              />
            <div class="card-body">
                <h5 class="card-text">{props.title}</h5>
                 
            </div>
            <div class="card-footer">
                <h6 class="card-text">{props.price}</h6>
            </div>
        </div>
        {/* <h2>Phearom</h2> */}
        </>
    )
   
    
}

export default Card









