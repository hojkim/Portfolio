import "./product.css";

let num = 0;
const Product = ({ img, link }) => {
   return (
      <div className="p">
         <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
         </div>
         <a href={link} target="_blank" rel="noreferrer">
            <img src={img} alt="" className={"p-img" + num++} />
         </a>
      </div>
   );
};

export default Product;
