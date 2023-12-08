// Import file CSS cho component Category
import "./Category.css";

// Import component Input từ đường dẫn tương đối
import Input from "../../components/Input";

// Khai báo component Category nhận prop handleChange để xử lý sự kiện khi thay đổi
function Category({ handleChange }) {
  return (
    // Phần giao diện của component Category
    <div>
      {/* Tiêu đề của phần lọc theo danh mục */}
      <h2 className="sidebar-title">Category</h2>

      {/* Phần chứa các lựa chọn danh mục */}
      <div>
        {/* Lựa chọn "All" */}
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>

        {/* Các lựa chọn còn lại, sử dụng component Input */}
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
}

// Xuất component Category để sử dụng trong các phần khác của ứng dụng
export default Category;
