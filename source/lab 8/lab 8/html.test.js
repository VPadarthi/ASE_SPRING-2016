describe('getweather', function() {

  // inject the HTML fixture for the tests
  beforeEach(function() {
    var fixture = '<div class="list list-inset">
      <input type="text" placeholder="Starting Point" id="cityname">
        <input type="text" placeholder="Ending Point" id="cityname1">
        
        </div>
      
      <button id="cli" on-touch="onTap()" class="button" ng-click="getdata()">get Weather</button>';

    document.body.insertAdjacentHTML(
      'afterbegin', 
      fixture);
  });

  // remove the html fixture from the DOM
  afterEach(function() {
    document.body.removeChild(document.getElementById('fixture'));
  });

  // call the init function of calculator to register DOM elements
  beforeEach(function() {
    window.calculator.init();
  });

  it('should return chicago', function() {
    document.getElementById('cityname').value ;
    document.getElementById('cityname1').value ;
    document.getElementById('cli').click();
    expect(document.getElementById('cityname').innerHTML).toBe('chicago');
  });
it('should return newyork', function() {
    document.getElementById('cityname').value ;
    document.getElementById('cityname1').value ;
    document.getElementById('cli').click();
    expect(document.getElementById('cityname'1).innerHTML).toBe('newyork');
  });

/*
  it('should calculate zero for invalid x value', function() {
    document.getElementById('x').value = 'hello';
    document.getElementById('y').value = 2;
    document.getElementById('add').click();
    expect(document.getElementById('result').innerHTML).toBe('0');
  });

  it('should calculate zero for invalid y value', function() {
    document.getElementById('x').value = 1;
    document.getElementById('y').value = 'goodbye';
    document.getElementById('add').click();
    expect(document.getElementById('result').innerHTML).toBe('0');
  });
*/

});