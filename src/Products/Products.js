// Import file CSS cho component Products
import "./Product.css";

// Khai báo component Products nhận prop result để hiển thị danh sách sản phẩm
const Products = ({ result }) => {
  return (
    <>
      {/* Phần giao diện của component Products */}
      <section className="card-container">
        {/* Hiển thị danh sách sản phẩm, truyền từ prop result */}
        {result}
      </section>
    </>
  );
};

// Xuất component Products để sử dụng trong các phần khác của ứng dụng
export default Products;
