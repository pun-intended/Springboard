describe("Servers test (with setup and tear-down)", function() {

});

let serverList = ['wallace', 'gromit', 'seth', 'dean', 'kevin', 'scott'];

function populateServerTable(){
    serverList.forEach(element => {
      serverNameInput.value = element;
      submitServerInfo();
    });
}

describe("SubmitServerInfo functionality tests", function(){
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should reset input field on submitServerInfo()', function(){
    submitServerInfo();
    expect(serverNameInput.value).toEqual('');
  })

  it('should increment serverId after each submission', function(){
    populateServerTable();
    expect(serverId).toBe(serverList.length);
  })

  afterEach(function() {
    allServers = {};
    serverId = 0;

    updateServerTable();
  });
})
describe("updateServerTable test", function(){
  it('should append server input to serverTable', function(){
    let testName = 'Terry'
    serverNameInput.value = testName
    updateServerTable();
    expect(serverTbody.rows.length).toEqual(1);
    expect(serverTbody.rows[0].cells[0].innerText).toEqual(testName);
  });
  it('should append all inputs to serverTable', function(){
    populateServerTable();
    expect(serverTbody.rows.length).toEqual(serverList.length);
  })
})