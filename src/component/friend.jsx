
export default function Friend({friend}){
    const {name,email}=(friend)

    return(
        <div >
            <div className='box'>
            <h3>Name:   {   name}</h3>
            <h3>Email:   {  email}</h3>
            </div>

        </div>
        
    )
}