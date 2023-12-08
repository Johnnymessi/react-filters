// Import useState hook từ thư viện React
import { useState } from "react";

// Import các component cần thiết
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";

// Import file CSS
import "./index.css";

// Khởi tạo component chính của ứng dụng
function App() {
  // State để lưu trữ danh mục được chọn
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  // State để lưu trữ giá trị nhập vào ô tìm kiếm
  const [query, setQuery] = useState("");

  // Hàm xử lý sự kiện khi giá trị ô tìm kiếm thay đổi
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Lọc các sản phẩm dựa trên giá trị nhập vào ô tìm kiếm
  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  // Hàm xử lý sự kiện khi giá trị của radio button thay đổi
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  // Hàm xử lý sự kiện khi nút được nhấn
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Hàm lọc dữ liệu dựa trên các tiêu chí được chọn
  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Lọc sản phẩm dựa trên giá trị nhập vào ô tìm kiếm
    if (query) {
      filteredProducts = filteredItems;
    }

    // Áp dụng bộ lọc được chọn
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    // Trả về danh sách các sản phẩm đã được lọc
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  // Lọc dữ liệu và lấy kết quả
  const result = filteredData(products, selectedCategory, query);

  // Render các component trong ứng dụng
  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

// Xuất component App để sử dụng trong ứng dụng
export default App;
