// Import component Input từ đường dẫn tương đối
import Input from "../../components/Input";

// Import file CSS cho component Price
import "./Price.css";

// Khai báo component Price nhận prop handleChange để xử lý sự kiện khi thay đổi
const Price = ({ handleChange }) => {


  return (
    // Phần giao diện của component Price
    <>
      <div className="ml">
        {/* Tiêu đề của phần lọc theo giá */}
        <h2 className="sidebar-title price-title">Price</h2>

        {/* Lựa chọn "All" */}
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        {/* Các lựa chọn còn lại, sử dụng component Input */}
        <Input
          handleChange={handleChange}
          value={500000}
          title="0 - 500k"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={1000000}
          title="500k - 1tr"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={1500000}
          title="1tr - 1,5tr"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={2000000}
          title="Trên 1,5tr"
          name="test2"
        />
      </div>
    </>
  );
};

// Xuất component Price để sử dụng trong các phần khác của ứng dụng
export default Price;
