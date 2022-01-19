import Dropdown from "react-bootstrap/Dropdown";

const CreditTab = () => {
  return (
    <div id="nav-tab-card">
      <form>
        <div className="form-group">
          <label for="username">First Name</label>
          <input
            type="text"
            name="username"
            placeholder="First Name"
            required
            className="form-control"
          />
          <label for="username">Last Name</label>
          <input
            type="text"
            name="username"
            placeholder="Last Name"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label for="cardNumber">Credit Card number</label>
          <div className="input-group">
            <input
              type="text"
              name="cardNumber"
              placeholder="Your card number"
              className="form-control"
              required
            />
            <div className="input-group-append">
              <span className="input-group-text text-muted">
                <i className="fa fa-cc-visa mx-1"></i>
                <i className="fa fa-cc-amex mx-1"></i>
                <i className="fa fa-cc-mastercard mx-1"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <div className="form-group">
              <label>
                <span className="hidden-xs">Expiration</span>
              </label>
              <div className="side-by-side">
                <Dropdown className="d1">
                  <Dropdown.Toggle variant="danger">Month</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Jan</Dropdown.Item>
                    <Dropdown.Item href="#">Feb</Dropdown.Item>
                    <Dropdown.Item href="#">Mar</Dropdown.Item>
                    <Dropdown.Item href="#">Apr</Dropdown.Item>
                    <Dropdown.Item href="#">May</Dropdown.Item>
                    <Dropdown.Item href="#">Jun</Dropdown.Item>
                    <Dropdown.Item href="#">Jul</Dropdown.Item>
                    <Dropdown.Item href="#">Aug</Dropdown.Item>
                    <Dropdown.Item href="#">Sep</Dropdown.Item>
                    <Dropdown.Item href="#">Oct</Dropdown.Item>
                    <Dropdown.Item href="#">Nov</Dropdown.Item>
                    <Dropdown.Item href="#">Dec</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="d1">
                  <Dropdown.Toggle variant="danger">Year</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">2022</Dropdown.Item>
                    <Dropdown.Item href="#">2023</Dropdown.Item>
                    <Dropdown.Item href="#">2024</Dropdown.Item>
                    <Dropdown.Item href="#">2025</Dropdown.Item>
                    <Dropdown.Item href="#">2026</Dropdown.Item>
                    <Dropdown.Item href="#">2027</Dropdown.Item>
                    <Dropdown.Item href="#">2028</Dropdown.Item>
                    <Dropdown.Item href="#">2029</Dropdown.Item>
                    <Dropdown.Item href="#">2030</Dropdown.Item>
                    <Dropdown.Item href="#">2031</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group mb-4">
              <label
                data-toggle="tooltip"
                title="Three-digits code on the back of your card"
              >
                CVV
                <i className="fa fa-question-circle"></i>
              </label>
              <input type="number" required className="form-control" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreditTab;
