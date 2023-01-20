import React, { useState, useEffect } from "react";
import Web3 from "web3";

const PaymentPage = () => {
  
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [ setContract, contract] = useState(null);

  useEffect(() => {
    // Connect to Ethereum network and get user's account
    const connectToEthereum = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        const accounts = await web3.eth.getAccounts();
        setWeb3(web3);
        setAccount(accounts[0]);
      } else {
        alert("You need to install MetaMask to use this feature");
      }
    };
    connectToEthereum();
  }, []);

  useEffect(() => {
    // Instantiate the smart contract
    if (web3) {
      const contract = new web3.eth.Contract();
      //contractABI;
      //contractAddress;
      setContract(contract);
    }
  }, [web3]);

  const handlePayment = async (amount) => {
    if (!contract) {
      alert("The contract is not loaded");
      return;
    }
    if (!account) {
      alert("You need to connect to MetaMask");
      return;
    }
    // Send payment to the smart contract
    contract.methods
      .pay(amount)
      .send({ from: account, value: web3.utils.toWei(amount, "ether") })
      .on("transactionHash", (hash) => {
        console.log(`Transaction hash: ${hash}`);
      })
      .on("confirmation", (confirmationNumber, receipt) => {
        console.log(`Transaction confirmed ${confirmationNumber}`);
      })
      .on("receipt", (receipt) => {
        console.log(`Transaction receipt: ${receipt}`);
      })
      .on("error", (error) => {
        console.log(`Transaction failed: ${error.message}`);
      });
  };

  return (
    <div className="d-flex justify-content-center">
      <h1 style={{ color: "black" }}>Payment: </h1>

      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => handlePayment(0.1)}
      >
        Pay 0.1 ETH
      </button>
    </div>
  );
};

export default PaymentPage;
