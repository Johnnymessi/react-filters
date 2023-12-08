// Import file CSS cho component Colors
import "./Colors.css";

// Import component Input từ đường dẫn tương đối
import Input from "../../components/Input";

// Khai báo component Colors nhận prop handleChange để xử lý sự kiện khi thay đổi
const Colors = ({ handleChange }) => {
  return (
    // Phần giao diện của component Colors
    <>
      <div>
        {/* Tiêu đề của phần lọc theo màu sắc */}
        <h2 className="sidebar-title color-title">Colors</h2>

        {/* Lựa chọn "All" */}
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          All
        </label>

        {/* Các lựa chọn còn lại, sử dụng component Input */}
        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />

        {/* Lựa chọn "White" với màu sắc được xác định tại chỗ */}
        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
      </div>
    </>
  );
};

// Xuất component Colors để sử dụng trong các phần khác của ứng dụng
export default Colors;
