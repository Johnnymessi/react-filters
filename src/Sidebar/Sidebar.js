// Import các components từ các đường dẫn tương đối
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

// Import file CSS cho component Sidebar
import "./Sidebar.css";

// Khai báo component Sidebar nhận prop handleChange để xử lý sự kiện khi thay đổi
const Sidebar = ({ handleChange }) => {
  return (
    // Phần giao diện của component Sidebar
    <>
      <section className="sidebar">
        {/* Phần container cho logo */}
        <div className="logo-container">
          {/* Biểu tượng (emoji) đại diện cho giỏ hàng */}
          <h1>🛒</h1>
        </div>

        {/* Component Category để lọc sản phẩm theo danh mục */}
        <Category handleChange={handleChange} />

        {/* Component Price để lọc sản phẩm theo giá */}
        <Price handleChange={handleChange} />

        {/* Component Colors để lọc sản phẩm theo màu sắc */}
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

// Xuất component Sidebar để sử dụng trong các phần khác của ứng dụng
export default Sidebar;
