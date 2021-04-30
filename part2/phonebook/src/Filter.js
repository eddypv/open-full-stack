const Filter = ({textFilter, handleChangeFilter}) =>{
    return (
        <div>
            <div>
                filter show with: <input type="text" onChange={handleChangeFilter} value={textFilter} />
            </div>
        </div>
    )
}

export default Filter