import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDateStripped from "./ExpenseDateStripped";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function ExpenseItem(props) {
  return (
    <li>
      <Row className="expense-item">
        <Col xs={2} sm={2} md={2} className="p-0 dateCol">
          <ExpenseDate date={props.date}></ExpenseDate>
        </Col>

   
        <Col xs={10} sm={8} md={8} className=" p-0">
          <h2 className="title">{props.title}</h2>
        </Col>

        <Col xs={2} sm={2} md={2}  className=" p-0">
          <div className="expense-item__description">
            <div className="expense-item__price">${props.amount}</div>
          </div>
        </Col>

        <Col xs={12} className="p-0 mt-3">
    <ExpenseDateStripped date={props.date}>

    </ExpenseDateStripped>
    </Col>
      </Row>
    </li>
  );
}

export default ExpenseItem;
