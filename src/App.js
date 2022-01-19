import React, { useState } from "react";
import ToggleSwitch from "./components/ToggleSwitch";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
import CreditTab from "./components/CreditTab";
import UpiTab from "./components/UpiTab";
import PaypalTab from "./components/PaypalTab";
import { useSpeechSynthesis } from "react-speech-kit";
import { items } from "./utils/items";
import "./styles.css";

const getFormattedPrice = (price) => `${price.toFixed(2)}`;

function Home() {
  const [tab, setTab] = useState("");
  const { speak } = useSpeechSynthesis();
  const [checkedState, setCheckedState] = useState(
    new Array(items.length).fill(false)
  );

  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + items[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);
  };

  return (
    <div classNameName="maincontainer">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-7 mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-5">
              <h1>Kotak Payments</h1>
              <hr />
              <React.Fragment>
                <ToggleSwitch label="Enable Voice" />
              </React.Fragment>
              <br />

              <div className="side-by-side">
                <Dropdown>
                  <Dropdown.Toggle variant="danger">Currency</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">INR</Dropdown.Item>
                    <Dropdown.Item href="#">USD</Dropdown.Item>
                    <Dropdown.Item href="#">EUR</Dropdown.Item>
                    <Dropdown.Item href="#">JPY</Dropdown.Item>
                    <Dropdown.Item href="#">GBP</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <button
                  className="th"
                  onClick={() => speak({ text: "Choose the currency" })}
                >
                  <i className="fa fa-microphone"></i>
                </button>
              </div>
              <br />

              <div className="App">
                <div className="side-by-side">
                  <h3>Select items</h3>
                  <button
                    className="th"
                    onClick={() => speak({ text: "Select items for billing" })}
                  >
                    <i className="fa fa-microphone"></i>
                  </button>
                </div>
                <ul className="items-list">
                  {items.map(({ name, price }, index) => {
                    return (
                      <li key={index}>
                        <div className="items-list-item">
                          <div className="left-section">
                            <input
                              type="checkbox"
                              id={`custom-checkbox-${index}`}
                              name={name}
                              value={name}
                              checked={checkedState[index]}
                              onChange={() => handleOnChange(index)}
                            />
                            <label htmlFor={`custom-checkbox-${index}`}>
                              {name}
                            </label>
                          </div>
                          <div className="right-section">
                            {getFormattedPrice(price)}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                  <li>
                    <div className="items-list-item">
                      <div className="left-section">Total:</div>
                      <div className="right-section">
                        {getFormattedPrice(total)}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <br />
              <br />
              <div>
                <ul
                  role="tablist"
                  className="nav bg-light nav-pills rounded-pill nav-fill mb-3"
                >
                  <li className="nav-item">
                    <button
                      data-toggle="pill"
                      className={`"nav-link ${
                        tab === "CC" ? "active" : ""
                      } rounded-pill`}
                      onClick={() => setTab("CC")}
                    >
                      <i className="fa fa-credit-card"></i>
                      Credit Card
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      data-toggle="pill"
                      className={`"nav-link ${
                        tab === "PP" ? "active" : ""
                      } rounded-pill`}
                      onClick={() => setTab("PP")}
                    >
                      <i className="fa fa-paypal"></i>
                      Paypal
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      data-toggle="pill"
                      className={`"nav-link ${
                        tab === "UP" ? "active" : ""
                      } rounded-pill`}
                      onClick={() => setTab("UP")}
                    >
                      <i className="fa fa-university"></i>
                      UPI
                    </button>
                  </li>
                </ul>
                <button
                  className="th"
                  onClick={() => speak({ text: "Choose mode of payment" })}
                >
                  <i className="fa fa-microphone"></i>
                </button>
              </div>

              <div className="tab-content">
                {tab === "CC" ? (
                  <CreditTab />
                ) : tab === "PP" ? (
                  <PaypalTab />
                ) : (
                  <UpiTab />
                )}
                <br />

                <h3>Address</h3>
                <form>
                  <div className="form-group">
                    <label for="address">Street Address Line 1</label>
                    <input
                      type="text"
                      name="address"
                      required
                      className="form-control"
                    />
                    <label for="address">Street Address Line 2</label>
                    <input
                      type="text"
                      name="username"
                      required
                      className="form-control"
                    />
                    <label for="address">City</label>
                    <input
                      type="text"
                      name="username"
                      required
                      className="form-control"
                    />
                    <label for="address">Postal / Zip Code</label>
                    <input
                      type="text"
                      name="username"
                      required
                      className="form-control"
                    />
                    <label for="address">State/Province</label>
                    <input
                      type="text"
                      name="username"
                      required
                      className="form-control"
                    />
                    <label for="address">Country</label>
                    <input
                      type="text"
                      name="username"
                      required
                      className="form-control"
                    />
                  </div>
                </form>
                <br />
                <button
                  type="button"
                  className="subscribe btn btn-primary btn-block rounded-pill shadow-sm"
                  onClick={() => alert("Payement Success")}
                >
                  {" "}
                  Submit{" "}
                </button>
                {/* <div>
                  <p>Payment success= {count}</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
