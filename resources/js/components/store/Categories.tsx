import React, { useEffect, useState } from 'react'

const Categories = () => {
    type Category = {
        name: string;
        subCategories: {
            name: string,
            image: string
        }

    };
    const [hoveredCategory, setHoveredCategory] = useState<Category | null>(null);


    const categories = [
        { name: "Men", subCategories: [{ name: 'Men suit', image: '/men/GoodMen9276_1.jpg' },{ name: 'Outdoor ', image: '/men/Outdoors-man-portrait_(cropped).jpg' },
            { name: 'Linent', image: '/men/linen-data.jpg' },{ name: 'T-Shirts', image: '/men/n00577A-2.jpeg' }] },
        { name: "Women", subCategories:[{ name: 'Clothes', image: '/women/Tom-James-Spring-2024-Womens-54.jpg' },{ name: 'Dark shoes', image: '/women/women-shoes.jpg' },
            { name: 'Light shoes', image: '/women/6ead3c2f7c3e8e174ebd49b8fea1a845.jpg' }] },
        { name: "Kids", subCategories: [{ name: 'Clothes', image: '/kids/3_6eec1fae-0405-4efe-8477-50897c482b7a.jpg' },{ name: 'Shoes', image: '/kids/7839_174776.jpg' }] },

    ];
    return (
        <div className="w-full h-72 shadow bg-white border-1 flex z-50 p-2">
            <div className="w-1/5 h-full bg-white" >
                <ul className="space-y-2 overflow-y-auto max-h-full " >
                    {
                        categories.map((category, index) => (
                            <li key={index} onMouseEnter={() => setHoveredCategory(category)} className="flex justify-between items-center cursor-pointer space-y-2" >
                                <span className="text-gray-800 font-medium">{category.name}</span>
                                <span className="text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
                                </span>

                            </li>
                        ))
                    }

                </ul>

            </div>


            <div className="w-3/5">
                {hoveredCategory && (
                    <div className="h-72">
                        <ul className='flex'>
                            {hoveredCategory.subCategories.map(sub => (
                                <li key={sub} className="text-gray-800 hover:text-blue-500">
                                    <div className="flex flex-row items-center p-4 rounded-lg ">
                                        <div className="flex flex-col">
                                        <div className="w-20 h-20 rounded-full overflow-hidden">
                                            <img alt={sub.name} sizes="25w" src={sub.image} width={20} height={20} className="object-cover w-full h-full" />
                                        </div>
                                        <span className="mt-2 text-sm font-medium text-gray-800 text-center">{sub.name}</span>
                                        </div>
                                    </div>
                                </li>
                            ))}

                        </ul>

                    </div>
                )}
            </div>
        </div>
    )
}

export default Categories