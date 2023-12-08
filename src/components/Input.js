// Khai báo component Input nhận các prop như handleChange, value, title, name, color
const Input = ({ handleChange, value, title, name, color }) => {
  return (
    // Phần giao diện của component Input
    <label className="sidebar-label-container">
      {/* Ô radio button */}
      <input onChange={handleChange} type="radio" value={value} name={name} />

      {/* Phần hiển thị đánh dấu (checkmark) */}
      <span className="checkmark" style={{ backgroundColor: color }}></span>

      {/* Tiêu đề của ô radio button */}
      {title}
    </label>
  );
};

// Xuất component Input để sử dụng trong các phần khác của ứng dụng
export default Input;
