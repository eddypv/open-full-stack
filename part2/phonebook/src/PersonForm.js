const PersonForm = ({name, phone, handleChangeName, handleChangePhone, handleSubmit})=>{
    return(
        <form onSubmit={handleSubmit}>
            <div>
                name: <input type="text" onChange={handleChangeName} value={name} />
            </div>
            <div>
                phone: <input type="text" onChange={handleChangePhone} value={phone} />
            </div>
            <div>
                <button type="submit" >add</button>
            </div>
        </form>
    )
}
export default PersonForm
