//SPDX-License-Identifier: MIT
pragma solidity >= 0.5.0 < 0.7.0;

contract ApprovalContract {
  constructor() public {
  }

  address payable public sender;
  address payable public receiver;
  address payable public constant approver = 0xc349c5B578ae031F6F7D94f48B57f02449774600;

  function deposit(address payable _receiver) external payable {
    require(msg.value > 0);
    sender = msg.sender;
    receiver = _receiver;
  }

  function viewApprover() external pure returns(address){
    return approver;
  }

  function approve() external {
    require(msg.sender == approver);
    receiver.transfer(address(this).balance);

  }
}
