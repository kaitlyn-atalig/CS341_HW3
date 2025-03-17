//Kaitlyn Atalig

var fs = require('fs');
const $ = require('jquery');

test('test selectEvent', () => {
  // Read the index.html file into a string
  var html = fs.readFileSync('public/index.html', 'utf8');
  
  // Check if the HTML content is valid
  expect(html).toEqual(expect.anything()); // any non-null value is okay
  
  // Put the HTML into a testing DOM and do a sanity check
  document.body.innerHTML = html;
  
  // Test that the <h1> tag contains the correct content
  expect($('h1').html()).toBe("Cheesecake Order Form");
});

