
const PaypalTab = () => {
  return (
    <div id="nav-tab-paypal">
      <p>Paypal is easiest way to pay online</p>
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
      <br/>
      <label for="email">Enter your email:</label>
      <input type="email" id="email" name="email" placeholder="Email" className="form-control"/>
    </div>
  );
};

export default PaypalTab;
