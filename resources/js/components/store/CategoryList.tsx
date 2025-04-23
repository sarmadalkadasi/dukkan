import React from "react"; //, { useEffect, useState }

const CategoryList = () => { //{ storeId }: { storeId: number }
  // const [Categories, setCategories] = useState([]);

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     const response = await fetch(`/api/store/${storeId}/categories`);
  //     const data = await response.json();
  //     setCategories(data);
  //   };

  //   fetchCategories();
  // }, [storeId]);

  const categories = [
    {
        id:1,
        image:"/categories/T-shirts.png",
        name:"Category 1",
        slug:"category-one"
    },
    {
        id:2,
        image:"/categories/Home.png",
        name:"Category 2",
        slug:"category-two"
    },

    {
        id:3,
        image:"/categories/Health.png",
        name:"Category 1",
        slug:"category-one"
    },
    {
        id:4,
        image:"/categories/Features.png",
        name:"Category 2",
        slug:"category-two"
    },


    {
        id:5,
        image:"/categories/accessories.png",
        name:"Category 1",
        slug:"category-one"
    },
    {
        id:6,
        image:"/categories/T-shirts.png",
        name:"Category 2",
        slug:"category-two"
    },
    {
        id:7,
        image:"/categories/T-shirts.png",
        name:"Category 2",
        slug:"category-two"
    },
  ]

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
      <div className="relative">
      <button
        onClick={scrollLeft}
        className="absolute -left-7 px-3 opacity-40 hover:opacity-100 duration-500 py-2 top-1/2 transform -translate-y-1/2 text-white bg-[#fdae49] rounded-full shadow-lg z-10"          
        aria-label="Scroll Left"
      >
        <span className="text-4xl">&#8592;</span>
      </button>
      <div
        className="flex overflow-x-hidden space-x-4 py-4 scroll-smooth scrollbar-hide"
        ref={scrollContainerRef}
      >
        {categories.map((item) => (
        <a
          href={`/list?cat=${item.slug}`}
          key={item.id}
          className="flex flex-col items-center justify-center w-60 h-96 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 flex-shrink-0"
        >
          <div className="relative bg-slate-100 w-full h-72">
        <img
          src={item.image || "cat.png"}
          alt=""
          sizes="20vw"
          className="object-cover w-full h-full select-none"
        />
          </div>
          <h1 className="text-center text-lg font-semibold mt-2">
        {item.name}
          </h1>
        </a>
        ))}
      </div>
      <button
        onClick={scrollRight}
        // className="absolute right-2 px-3 py-3 top-1/2 transform -translate-y-1/2 text-white rounded-full shadow-lg hover:bg-[#fdae49] transition duration-300 z-10 border-2 border-ring-[#fdae49] hover:scale-110"
        className="absolute -right-7 px-3 opacity-40 hover:opacity-100 duration-500 py-2 top-1/2 transform -translate-y-1/2 text-white bg-[#fdae49] rounded-full shadow-lg z-10"

        aria-label="Scroll Right"
      >
        <span className="text-4xl">&#8594;</span>
      </button>
      </div>
    </div>
  );
};

export default CategoryList;