const Filter = ({textFilter, handleChangeFilter}) =>{
    return (
        <div>
            <div>
                find countries: <input type="text" onChange={handleChangeFilter} value={textFilter} />
            </div>
        </div>
    )
}

export default Filter