//---------------------------------------------------
// Commenting lab related comments with @lab prefix
//---------------------------------------------------

const SimpleStorage = artifacts.require("SimpleStorage");

contract('SimpleStorage', () => {
  it('should read newly written values', async() => {
    const simpleStorageInstance = await SimpleStorage.deployed();
    var value = (await simpleStorageInstance.read.call()).toNumber();

    assert.equal(value, 0, "0 wasn't the initial value");

    await simpleStorageInstance.write(1);
    value = (await simpleStorageInstance.read.call()).toNumber();
    assert.equal(value, 1, "1 was not written");

    await simpleStorageInstance.write(2);
    value = (await simpleStorageInstance.read.call()).toNumber();
    assert.equal(value, 2, "2 was not written");

    // @lab adding additional testcase
    await simpleStorageInstance.write(3000);
    value = (await simpleStorageInstance.read.call()).toNumber();
    assert.equal(value, 3000, "3000 was not written");

  });
});
