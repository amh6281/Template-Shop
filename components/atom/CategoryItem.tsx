import { ItemList } from "@/constants/Item";
import Image from "next/image";

const CategoryItem = () => {
  return (
    <div className="flex flex-col gap-5">
      {ItemList.map((category, index) => (
        <div className="px-5" key={index}>
          <span className="text-xl ml-1">{category.title}</span>
          <div className="flex gap-4">
            {category.item.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={200}
                  height={200}
                />
                <span className="w-[200px] text-center">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryItem;
