// Import biểu tượng (icon) từ thư viện react-icons
import { BsFillBagFill } from "react-icons/bs";

// Khai báo component Card nhận các prop như img, title, star, reviews, prevPrice, newPrice
const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    // Phần giao diện của component Card
    <>
      <section className="card">

        {/* Hình ảnh sản phẩm */}
        <img src={img} alt={title} className="card-img" />

        {/* Phần chi tiết của sản phẩm */}
        <div className="card-details">

          {/* Tiêu đề của sản phẩm */}
          <h3 className="card-title">{title}</h3>

          {/* Phần đánh giá (star) và số lượng đánh giá */}
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>

          {/* Phần giá sản phẩm */}
          <section className="card-price">
            {/* Giá trước giảm giá và giá mới */}
            <div className="price">
              {/* <del>{prevPrice}</del> {newPrice} */}

              <p>{parseInt(newPrice).toLocaleString() + 'vnđ'}</p>

            </div>

            {/* Biểu tượng túi mua sắm */}
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>

        </div>
      </section>
    </>
  );
};

// Xuất component Card để sử dụng trong các phần khác của ứng dụng
export default Card;
