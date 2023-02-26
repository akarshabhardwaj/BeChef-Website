import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
  } from "@chakra-ui/react";

  import { Box, Heading, Spacer, Text } from "@chakra-ui/react";

  import React, { useState } from "react";
import { useSelector } from "react-redux";

//   import { useSelector } from "react-redux";

  import { useNavigate } from "react-router-dom";

  import "./Payment.css";
  
  const initDetails = {
    creditCardNum: "",
    cardHolder: "",
    expireMonth: "January",
    expireYear: "2024",
  };
  
  const Payment = () => {
    const totalAmount = useSelector((store) => store.cart.totalPrice);
    const [details, setDetails] = useState(initDetails);
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleChange = (e) => {
      setDetails({ ...details, [e.target.name]: e.target.value });
      console.log(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onOpen();
    };
  
    return (
      <div>
        <Heading color={'#002c9b'}>Enter you Credit Card details</Heading><br />
        <Text  fontSize={"20px"}>Total Amount will be deduct <Text as={"span"} fontSize={"20px"} fontWeight="bold" color='#002c9b'> ${totalAmount} </Text></Text><br />
        <Box>
          <Spacer h="100" />
          <div
            style={{
              width: "30%",
              margin: "auto",
            }}
          >
            <form id="form" onSubmit={handleSubmit}>
              <div id="card">
                <div className="header">
                  <div className="sticker"></div>
                  <div>
                    {/* <img
                      className="logo"
                      src="https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png"
                      alt="Card logo"
                    /> */}
                  </div>
                </div>
                <div className="body">
                  <h2 style={{ marginTop: "80px" }} id="creditCardNumber">
                    {details.creditCardNum}
                  </h2>
                </div>
                <div className="footer">
                  <div>
                    <h5>Card Holder</h5>
                    <h3>{details.cardHolder}</h3>
                  </div>
                  <div>
                    <h5>Expires</h5>
                    <h3>
                      {details.expireMonth} / {details.expireYear}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="input-container mt">
                <h4>Enter card number</h4>
                <input
                  type="text"
                  maxLength={16}
                  minLength={16}
                  name="creditCardNum"
                  value={details.creditCardNum}
                  onChange={handleChange}
                  required
                />
              </div>
  
              <div className="input-container">
                <h4>Card Holder Name</h4>
                <input
                  type="text"
                  name="cardHolder"
                  value={details.cardHolder}
                  onChange={handleChange}
                  required
                />
              </div>
  
              <div
                style={{
                  display: "flex",
                  margin: "auto",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <div>
                  <h3>Expiration Month</h3>
                  <select
                    value={details.expireMonth}
                    name="expireMonth"
                    onChange={handleChange}
                    required={true}
                  >
                    <option name="January" value="January">
                      January
                    </option>
                    <option name="February" value="February">
                      February
                    </option>
                    <option name="March" value="March">
                      March
                    </option>
                    <option name="April" value="April">
                      April
                    </option>
                    <option name="May" value="May">
                      May
                    </option>
                    <option name="June" value="June">
                      June
                    </option>
                    <option name="July" value="July">
                      July
                    </option>
                    <option name="August" value="August">
                      August
                    </option>
                    <option name="September" value="September">
                      September
                    </option>
                    <option name="October" value="October">
                      October
                    </option>
                    <option name="November" value="November">
                      November
                    </option>
                    <option name="December" value="December">
                      December
                    </option>
                  </select>
                </div>
                <div>
                  <h4>Year</h4>
                  <select
                    value={details.expireYear}
                    name="expireYear"
                    onChange={handleChange}
                    required={true}
                  >
                    <option name="2024" value="2024">
                      2024
                    </option>
                    <option name="2025" value="2025">
                      2025
                    </option>
                    <option name="2026" value="2026">
                      2026
                    </option>
                    <option name="2027" value="2027">
                      2027
                    </option>
                    <option name="2028" value="2028">
                      2028
                    </option>
                    <option name="2029" value="2029">
                      2029
                    </option>
                    <option name="2030" value="2030">
                      2030
                    </option>
                    <option name="2031" value="2031">
                      2031
                    </option>
                    <option name="2032" value="2032">
                      2032
                    </option>
                  </select>
                </div>
                <div>
                  <h4>CVV</h4>
                  <input  type="password" maxLength={3} minLength={3} placeholder="CVV" required />
                </div>
              </div>
  
              <button style={{backgroundColor:'#0f346c'}}>Submit Payment</button>
            </form>
          </div>
  
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalContent style={{background:"#013341"}}>
              <ModalHeader style={{ textAlign: "center", fontSize: "2rem",color:"white" }}>
                Payment Successful
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody style={{ width: "80%", margin: "auto", height: "1rem" }}>
                <img
                  style={{ width: "100%" }}
                  src="https://cdn.dribbble.com/users/4358240/screenshots/14825308/preview.gif"
                  alt="GIF"
                />
              </ModalBody>
  
              <ModalFooter style={{display:"flex",justifyContent:"center"}}>
                
                <Button onClick={()=>navigate("/")} variant="solid">Continue Shopping</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box><br /><br />
      </div>
    );
  };
  
  export default Payment;