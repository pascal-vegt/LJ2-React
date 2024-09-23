const Order = ({ place, orderID, status }) => {
  const buttonClass = status === "on the way" ? "on-the-way" : "delivered";

  return (
    <section>
      <div>
        <h2>Package from {place}</h2>
        <h3>Order ID #14389-{orderID}</h3>
      </div>
      <button className={buttonClass}>{status}</button>
    </section>
  );
};

export default Order;
