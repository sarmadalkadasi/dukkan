"use client"
const SearchBar = () => {
  return (
    <form className="flex justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1">
        <input type="text" name="name" placeholder="Search" className="flex-1 bg-transparent outline-none" />
        <button className="cursor-pointer">
            <img src="/search.png" alt="search" width={16} height={16}/>
        </button>

    </form>
  )
}

export default SearchBar