import Image from "next/image";

const CategoryItem = () => {
  return (
    <div className="px-5">
      <span className="text-xl ml-1">카테고리 1</span>
      <div className="flex flex-col">
        <Image
          src="https://via.placeholder.com/200"
          alt="카테고리1"
          width={200}
          height={200}
        />
        <span className="w-[200px] text-center">상품 이름1</span>
      </div>
    </div>
  );
};

export default CategoryItem;
