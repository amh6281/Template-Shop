const Navbar = () => {
  return (
    <div className="w-full h-20 border-b-2">
      <div className="h-8 w-full border-b-2 flex items-center px-5 justify-between">
        <span>개설하기</span>
        <div className="flex items-end gap-3">
          <span>장바구니</span>
          <span>로그인</span>
          <span>고객센터</span>
          <span>마이페이지</span>
        </div>
      </div>
      <div className="w-full h-12 flex items-center justify-between px-5">
        <span>로고</span>
        <div className="flex items-center gap-3 font-medium">
          <span>쇼핑몰 몰아보기</span>
          <span>상품 몰아보기</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
