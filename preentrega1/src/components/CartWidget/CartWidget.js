
const CartWidget = () => {
  const itemCount = 5; 

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end">
        <div className="position-relative">
                    <span className="badge badge-danger badge-pill position-absolute" style={{ top: 0, right: 0 }}>
            {itemCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartWidget;