

const Search = ({ search, setSearch }) => {
    return (
        <div className="search">
            <h2>Pesquisar tarefa:</h2>
            <label>
                <input
                    type="text"
                    placeholder="Digite o título da tarefa para pesquisar..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </label>
        </div>
    )
}

export default Search