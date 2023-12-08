// Import component Button từ đường dẫn tương đối
import Button from "../components/Button";

// Import file CSS cho component Recommended
import "./Recommended.css";

// Khai báo component Recommended nhận prop handleClick để xử lý sự kiện nút được chọn
const Recommended = ({ handleClick }) => {
  return (
    <>
      {/* Phần giao diện của component Recommended */}
      <div>
        {/* Tiêu đề "Recommended" */}
        <h2 className="recommended-title">Recommended</h2>

        {/* Dãy nút lọc theo thương hiệu */}
        <div className="recommended-flex">
          {/* Nút "All Products" */}
          <Button onClickHandler={handleClick} value="" title="All Products" />

          {/* Các nút lọc theo thương hiệu cụ thể (Nike, Adidas, Puma, Vans) */}
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

// Xuất component Recommended để sử dụng trong các phần khác của ứng dụng
export default Recommended;
