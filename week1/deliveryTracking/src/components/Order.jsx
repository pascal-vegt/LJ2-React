const Order = ({ place, orderID, status }) => {
  return (
    <section>
      <div>
        <h2>Package from {place}</h2>
        <h3>Order ID #14389-{orderID}</h3>
      </div>
      <button>{status}</button>
    </section>
  );
};

export default Order;
