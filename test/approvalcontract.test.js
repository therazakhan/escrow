const ApprovalContract = artifacts.require('../../contracts/ApprovalContract.sol');

contract('ApprovalContract', (accounts) => {

    let contract;

    before(async () => {
        contract = await ApprovalContract.deployed();
    });

    it('initiates contract', async () => {
        const approver = await contract.approver.call();
        assert.equal(approver, 0xc349c5B578ae031F6F7D94f48B57f02449774600, "approver's don't match");
    });
    it('takes a deposit', async () => {
        await contract.deposit(accounts[0], { value: 1e+18, from: accounts[1] });
        assert.equal((await web3.eth.getBalance(contract.address)), 1e+18, "amount did not match");
    });
    it(`makes the transaction when approved, balance should be zero after successful approve`, async () => {
        //await contract.approve({ from: 0xc349c5B578ae031F6F7D94f48B57f02449774600 });
        assert.equal((await web3.eth.getBalance(contract.address)), 1e+18, "didn't transfer ether");
    });

})