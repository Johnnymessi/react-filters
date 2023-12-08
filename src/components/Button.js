// Khai báo component Button nhận các prop như onClickHandler, value, title
const Button = ({ onClickHandler, value, title }) => {
  return (
    // Phần giao diện của component Button
    <button onClick={onClickHandler} value={value} className="btns">
      {/* Nội dung của nút, được truyền qua prop title */}
      {title}
    </button>
  );
};

// Xuất component Button để sử dụng trong các phần khác của ứng dụng
export default Button;
