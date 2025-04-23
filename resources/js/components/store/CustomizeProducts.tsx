
const CustomizeProducts = () => {
  return (
    <div className="flex flex-col gap-6">
<h4 className="font-medium">Choose a color</h4>
<ul className="flex items-center gap-3">
    <li className="h-8 w-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
        <div className="absolute w-10 h-10 ring-2 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
    </li>

    <li className="h-8 w-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500">
    </li>

    <li className="h-8 w-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-500">
        <div className="absolute w-10 h-[2px]  bg-red-500 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
    </li>
</ul>

<h4 className="font-medium">Choose a size</h4>
<ul className="flex items-center gap-3">
    <li className="ring-1 ring-lightPink text-lightPink rounded-md py-1 px-4 text-sm cursor-pointer">Small</li>
    <li className="ring-1 ring-lightPink text-white  bg-lightPink  rounded-md py-1 px-4 text-sm cursor-pointer">Meduim</li>
    <li className="ring-1 ring-pink-200 bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed text-white">Large</li>

</ul>

    </div>
  )
}

export default CustomizeProducts