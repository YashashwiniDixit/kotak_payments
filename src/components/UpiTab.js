
const UpiTab = () => {
  return (
    <div id="nav-tab-upi">
      <h6>UPI account details</h6>
      <label for="upiid">UPI ID</label>
      <input
        type="text"
        name="upiid"
        placeholder="UPI ID"
        required
        className="form-control"
      />
    </div>
  );
};

export default UpiTab;
