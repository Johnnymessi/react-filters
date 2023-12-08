// Import các biểu tượng (icons) từ thư viện react-icons
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

// Import file CSS cho component Nav
import "./Nav.css";

// Khai báo component Nav nhận prop handleInputChange và query để xử lý tìm kiếm
const Nav = ({ handleInputChange, query }) => {
  return (
    // Phần giao diện của component Nav
    <nav>
      {/* Phần container của thanh điều hướng */}
      <div className="nav-container">
        {/* Ô nhập liệu cho tìm kiếm giày */}
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}  // Xử lý sự kiện khi giá trị thay đổi
          value={query}  // Giá trị của ô tìm kiếm, được giữ bởi state
          placeholder="Enter your search shoes."  // Gợi ý văn bản
        />
      </div>

      {/* Phần container của các biểu tượng (icons) liên quan đến người dùng */}
      <div className="profile-container">
        {/* Biểu tượng "heart" */}
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        {/* Biểu tượng "shopping cart" */}
        <a href="">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        {/* Biểu tượng "user add" */}
        <a href="">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

// Xuất component Nav để sử dụng trong các phần khác của ứng dụng
export default Nav;
