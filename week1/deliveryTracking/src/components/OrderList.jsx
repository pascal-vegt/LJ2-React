import Order from "./Order";
import { useState } from "react";

const OrderList = () => {
  const [orders, setOrders] = useState([
    {
      place: "Rotterdam",
      orderID: "1",
      status: "on the way",
    },
    {
      place: "Amsterdam",
      orderID: "2",
      status: "delivered",
    },
    {
      place: "Eindhoven",
      orderID: "3",
      status: "delivered",
    },
    {
      place: "Barcelona",
      orderID: "4",
      status: "delivered",
    },
    {
      place: "Paris",
      orderID: "5",
      status: "delivered",
    },
    {
      place: "Toronto",
      orderID: "6",
      status: "delivered",
    },
    {
      place: "Berlin",
      orderID: "7",
      status: "delivered",
    },
    {
      place: "Vienna",
      orderID: "8",
      status: "delivered",
    },
  ]);

  return (
    <div className="orderList">
      <h1>Delivery tracking</h1>
      <article>
        {orders.map((order) => (
          <Order
            place={order.place}
            orderID={order.orderID}
            status={order.status}
          />
        ))}
      </article>
    </div>
  );
};

export default OrderList;
